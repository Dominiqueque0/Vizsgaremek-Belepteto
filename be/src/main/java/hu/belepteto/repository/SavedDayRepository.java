package hu.belepteto.repository;

import hu.belepteto.model.SavedDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface SavedDayRepository extends JpaRepository<SavedDay, Integer>{
    @Query(value = "SELECT * FROM saved_day WHERE DATE(savedate) = DATE(?1)", nativeQuery = true)
    List<SavedDay> findByEntryTime(Date date);
}
