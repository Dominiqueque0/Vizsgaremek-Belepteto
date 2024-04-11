package hu.belepteto.controller;

import hu.belepteto.dto.savedDay.GetSavedDay;
import hu.belepteto.service.SavedDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class SavedDayController {
    @Autowired
    private SavedDayService service;

    @PostMapping("/savedDay/create")
    private List<GetSavedDay> createSavedDay(){
        return service.createSavedDay();
    }

    @PostMapping("/savedDay")
    private List<GetSavedDay> getSavedDay(@RequestBody Date date){
        System.out.println("teszt");
        return service.getSavedDayByDate(date);
    }
}
