package com.example.sample.Controller;

// import java.util.ArrayList;
import java.util.List;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.Entity.partyentity;
import com.example.sample.Service.partyservice;


@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/addEventDetails")
class EventController {

    @Autowired
    partyservice r;
// ---------------------CRUD OPERATION------------------

@PostMapping("/add/event")
public String addDetails(@RequestBody partyentity m) {
    r.add(m);
    return "Event Added successfully" ;
}

@GetMapping("/get/event")
public List<partyentity> showDetails() {
    return r.getDetails();

}
// @GetMapping("/get/event/{id}")
// public partyentity showDetail(@PathVariable int id) {
//     return r.getDetail(id);

// }

@PutMapping("/update/event/{id}")
public partyentity Details(@RequestBody partyentity newUser ,@PathVariable int id)
{
     return r.updateDetails(newUser,id);
}

@DeleteMapping("/delete/event/{id}")
public String delete(@PathVariable int id )
{
    r.deleteDetails(id);
    return "Event deleted successfully";
    // return "your item id "+ "is deleted";
}

}