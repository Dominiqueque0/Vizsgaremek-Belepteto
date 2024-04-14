package hu.belepteto.repository;

import hu.belepteto.model.SavedDay;
import hu.belepteto.model.Visit;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface VisitRepository extends JpaRepository<Visit, Integer> {

}