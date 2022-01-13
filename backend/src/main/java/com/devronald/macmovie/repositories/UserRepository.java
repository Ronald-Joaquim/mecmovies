package com.devronald.macmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devronald.macmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
