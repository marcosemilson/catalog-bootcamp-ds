package com.bootcampds2.dscatalog.services.validation;
import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.bootcampds2.dscatalog.dto.UserInsertDTO;
import com.bootcampds2.dscatalog.entities.User;
import com.bootcampds2.dscatalog.repositories.UserRepository;
import com.bootcampds2.dscatalog.resources.exceptions.FieldMessage;

import org.springframework.beans.factory.annotation.Autowired;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {
	
	@Autowired
	private UserRepository repository;
	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {
		
		List<FieldMessage> list = new ArrayList<>();
		User user = repository.findByEmail(dto.getEmail());
		if(user != null){
			list.add(new FieldMessage("email", "email já existe"));

		}
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}