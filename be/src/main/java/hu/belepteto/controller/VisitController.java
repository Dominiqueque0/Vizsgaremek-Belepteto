package hu.belepteto.controller;

import hu.belepteto.dto.visit.CreateVisit;
import hu.belepteto.dto.visit.GetVisit;
import hu.belepteto.dto.visit.UpdateOneVisit;
import hu.belepteto.service.VisitService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@Tag(name = "Belépések kezelése")
public class VisitController {
    @Autowired
    private VisitService service;

    @PostMapping("/visit")
    @Operation(summary = "Belépés hozzáadása", description = "Új belépés felvétele a rendszerbe adatainak megadásával")
    private GetVisit createVisit(@RequestBody CreateVisit createVisit){
        return service.createVisit(createVisit);
    }

    @GetMapping("/visit/{id}")
    @Operation(summary = "Belépés lekérdezése", description = "Belépés adatainak lekérdezése ID alapján")
    private GetVisit getVisit(@PathVariable Integer id){
        return service.getVisit(id);
    }

    @PostMapping("/visit/list")
    @Operation(summary = "Belépések listázása",description = "Belépések adatainak kilistázása a rendszerben")
    private List<GetVisit> listVisit(){
        return service.listVisits();
    }

    @DeleteMapping("/visit/{id}")
    @Operation(summary = "Belépés törlése", description = "ID megadásával belépés törlése a rendszerből")
    private boolean deleteVisit(@PathVariable Integer id){
        return service.deleteVisit(id);
    }

    @PatchMapping("/visit/{id}")
    @Operation(summary = "Belépés szerkesztése", description = "Kilépés dátumának megadása")
    private GetVisit updateVisit(@PathVariable Integer id){
        return service.updateOneVisit(id);
    }

    @DeleteMapping("/visit/all")
    @Operation(summary = "Belépések nullázása", description = "Új nap kezdése")
    private boolean deleteAllVisits(){
        return service.deleteAllVisits();
    };
}
