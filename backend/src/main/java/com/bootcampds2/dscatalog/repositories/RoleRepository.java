package com.bootcampds2.dscatalog.repositories;

import com.bootcampds2.dscatalog.entities.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
	

}
