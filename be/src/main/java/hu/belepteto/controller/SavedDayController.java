package hu.belepteto.controller;

import hu.belepteto.dto.savedDay.GetSavedDay;
import hu.belepteto.service.SavedDayService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@Tag(name = "Lementett napok kezelése")
public class SavedDayController {
    @Autowired
    private SavedDayService service;

    @PostMapping("/savedDay/create")
    private List<GetSavedDay> createSavedDay(){
        return service.createSavedDay();
    }

    @PostMapping("/savedDay")
    private List<GetSavedDay> getSavedDay(@RequestBody Date date){
        return service.getSavedDayByDate(date);
    }
}
