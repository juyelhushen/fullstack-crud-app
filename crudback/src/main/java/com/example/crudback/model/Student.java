package com.example.crudback.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "student")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String branch;

}
