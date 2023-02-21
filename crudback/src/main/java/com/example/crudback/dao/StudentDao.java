package com.example.crudback.dao;

import com.example.crudback.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDao extends JpaRepository<Student,Integer> {



}
