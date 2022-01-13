package com.devronald.macmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devronald.macmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
