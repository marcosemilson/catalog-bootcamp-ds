package com.bootcampds2.dscatalog.repositories;

import com.bootcampds2.dscatalog.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
    User findByEmail(String email);

}
