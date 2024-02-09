package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Entity.partyentity;
import com.example.sample.Repository.partyrepo;




@Service
public class partyservice {

    @Autowired(required=true)
	partyrepo r;
	
	public String add(partyentity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<partyentity> getDetails()
	{
		return r.findAll();
	}
	
	public partyentity updateDetails(partyentity newUser ,int id) 
	{
		partyentity up=r.findById(id).get();		
		 up.setTitle(newUser.getTitle());
		 up.setEventdate(newUser.getEventdate());
		 up.setDescription(newUser.getDescription());
		 
         return r.saveAndFlush(up);
	}
	
   
	
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	// public eventadd getDetail(int id) {
	
	// 	return r.findById(id).get();
	// }


}