package com.example.crudback.service;

import com.example.crudback.dao.StudentDao;
import com.example.crudback.model.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class StudentService {

    @Autowired
    private final StudentDao studentDao;

    public List<Student> getStudentList() {
        return studentDao.findAll();
    }

    public Optional<Student> getStudentById(Integer id) {
        return studentDao.findById(id);
    }

    public Boolean saveStudent(Student student) {
        boolean result = false;

        try {
            studentDao.save(student);
            result= true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return  result;
    }

    public Boolean updateStudent(Integer id,Student student) {
        boolean status = false;
        Optional<Student> studentById = studentDao.findById(id);
        try {
            if (studentById.isPresent()) {
                Student studentDetails = studentById.get();
                studentDetails.setName(student.getName());
                studentDetails.setEmail(student.getEmail());
                studentDetails.setBranch(student.getBranch());
                studentDao.save(studentDetails);
                status = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    public Boolean deleteStudent(Integer id) {
        boolean status = false;
        try {
            studentDao.deleteById(id);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }
}
