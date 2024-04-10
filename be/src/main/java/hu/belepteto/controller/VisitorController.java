package hu.belepteto.controller;

import hu.belepteto.dto.visit.CreateVisit;
import hu.belepteto.dto.visit.GetVisit;
import hu.belepteto.dto.visit.UpdateOneVisit;
import hu.belepteto.dto.visitor.CreateVisitor;
import hu.belepteto.dto.visitor.GetVisitor;
import hu.belepteto.service.VisitorService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VisitorController {
    @Autowired
    private VisitorService service;

    @PostMapping("/visitor")
    @Operation(summary = "Vendég hozzáadása", description = "Új vendég felvétele a rendszerbe adatainak megadásával")
    public GetVisitor createVisitor(@RequestBody CreateVisitor createVisitor){
        return service.createVisitor(createVisitor);
    }

    @GetMapping("/visitor/{id}")
    @Operation(summary = "Vendég lekérdezése", description = "Vendég adatainak lekérdezése ID alapján")
    public GetVisitor getVisitor(@PathVariable Integer id){
        return service.getVisitor(id);
    }

    @PostMapping("/visitor/list")
    @Operation(summary = "Vendégek listázása",description = "Vendégek adatainak kilistázása a rendszerben")
    public List<GetVisitor> getVisitorList(){
        return service.listVisitors();
    }

    @PreAuthorize("hasAuthority('permission:admin')")
    @DeleteMapping("/visitor/{id}")
    @Operation(summary = "Vendég törlése", description = "ID megadásával vendég törlése a rendszerből")
    public boolean deleteVisitor(@PathVariable Integer id){
        return service.deleteVisitor(id);
    }
}
