package com.devronald.macmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devronald.macmovie.entities.Score;
import com.devronald.macmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
