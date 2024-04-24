package com.gl.todo.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todo.entity.ToDoList;
import com.gl.todo.exception.ResourceNotFoundExpection;
import com.gl.todo.repository.ToDoListRepository;
import com.gl.todo.service.ToDoListService;

@Service
public class ToDoListServiceImpl implements ToDoListService {
	@Autowired
	ToDoListRepository dao;

	@Override
	public ToDoList createToDoList(ToDoList to) {
		dao.save(to);

		return to;
	} 

	@Override
	public ToDoList getToDoListById(int id) {
		ToDoList d = null;
		d = dao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
		return d;
	}

	@Override
	public ToDoList updateToDoListById(int id, ToDoList to) {
		ToDoList d = null;
		d = dao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
		d.setDescription(to.getDescription());
		d.setTitle(to.getTitle());
		
	        d.setStatus(to.isStatus());
	    
	    
	    

		return dao.save(d);
	}

	@Override
	public List<ToDoList> getAllToDoList() {
		List<ToDoList> list = dao.findAll();
		return list;
	}

	@Override
	public void deleteToDoListById(int id) {
		dao.deleteById(id);

	}

	@Override
	public ToDoList completeTask(int id) {
		ToDoList d2 = null;
		d2 = dao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
		d2.setStatus(true);
		return dao.save(d2);
	}

	@Override
	public ToDoList inCompleteTask(int id) {
		ToDoList d1 = null;
		d1 = dao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("To do list is not found by given id " + id));
		d1.setStatus(false);
		return dao.save(d1);
		
	}

}
