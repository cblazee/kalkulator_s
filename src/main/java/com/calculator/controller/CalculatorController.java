package com.calculator.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.calculator.service.CalculateSalary;

import javax.inject.Inject;

@RestController
public class CalculatorController {
    @Inject
    private CalculateSalary calculateSalary;

    @RequestMapping("/getRates")
    public String getRates(
            @RequestParam(value="code", defaultValue="PLN") String code,
            @RequestParam(value="salary", defaultValue="0") String salary
    ) {
        return calculateSalary.calculateSalary(Double.parseDouble(salary), code);
    }
}
