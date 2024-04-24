package com.gl.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND )
public class ResourceNotFoundExpection  extends RuntimeException{
	 public ResourceNotFoundExpection(String  msg ){
		super(msg);
	}
}
