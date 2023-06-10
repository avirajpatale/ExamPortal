package com.app.dao;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.PaperSetter;

public interface PaperSetterRepo extends JpaRepository<PaperSetter, Long> {

	public PaperSetter findByEmail(String email);
	
	public PaperSetter findByEmailAndDob(String email , LocalDate dob);
}
