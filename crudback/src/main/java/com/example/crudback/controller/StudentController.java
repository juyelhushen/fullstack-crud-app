package com.example.crudback.controller;

import com.example.crudback.dao.StudentDao;
import com.example.crudback.model.Student;
import com.example.crudback.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/student")
@CrossOrigin(origins = "http://localhost:4200",methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.DELETE, RequestMethod.PUT})
public class StudentController {

    @Autowired
    private final StudentDao studentDao;
    @Autowired
    private final StudentService studentService;

    @GetMapping(path = "/get")
    public List<Student> getStudentList() {
        return studentService.getStudentList();
    }


    @GetMapping(path = "/get/{id}")
    public Optional<Student> getStudentById(@PathVariable Integer id) {
        return studentService.getStudentById(id);
    }

    @PostMapping(path = "/save")
    public Boolean saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @PutMapping(path = "/update/{id}")
    public Boolean updateStudent(@PathVariable Integer id,@RequestBody Student student) {
        return studentService.updateStudent(id,student);
    }

    @DeleteMapping(path = "/delete/{id}")
    public Boolean deleteStudent(@PathVariable Integer id) {
        return studentService.deleteStudent(id);
    }
}
