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

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Visit v WHERE DATE(v.entryTime) = DATE(:date)")
    void deleteByEntryTime(@Param("date") Date date);

    @Query(value = "SELECT * FROM visit WHERE DATE(entry_time) = DATE(:date)", nativeQuery = true)
    List<Visit> findByEntryTime(@Param("date") Date date);
}