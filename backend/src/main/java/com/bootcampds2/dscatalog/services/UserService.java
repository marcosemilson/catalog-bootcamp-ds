package com.bootcampds2.dscatalog.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.bootcampds2.dscatalog.dto.RoleDTO;
import com.bootcampds2.dscatalog.dto.UserDTO;
import com.bootcampds2.dscatalog.dto.UserInsertDTO;
import com.bootcampds2.dscatalog.entities.Role;
import com.bootcampds2.dscatalog.entities.User;
import com.bootcampds2.dscatalog.repositories.RoleRepository;
import com.bootcampds2.dscatalog.repositories.UserRepository;
import com.bootcampds2.dscatalog.services.exceptions.DatabaseException;
import com.bootcampds2.dscatalog.services.exceptions.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;	

	
	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(PageRequest pageRequest){
		Page<User> list = repository.findAll(pageRequest);
		return list.map(x -> new UserDTO(x));
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(()-> new EntityNotFoundException("Entity not found"));
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO update(Long id, UserDTO dto) {
		try {
		User entity = repository.getOne(id);
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new UserDTO(entity);
		}
		catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id "  + id +" not found");
		}
	}

	public void delete(Long id) {
		try {
		repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id "  + id +" not found");
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
		
	}
	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setFisrtName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		
		entity.getRoles().clear();
		for(RoleDTO roleDTO : dto.getRoles()) {
			Role role = roleRepository.getOne(roleDTO.getId());
			entity.getRoles().add(role);
		}
		
	}

}
