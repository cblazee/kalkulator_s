package com.calculator.service;

import com.calculator.controller.CurrentRateController;
import com.calculator.model.NationalFee;
import org.springframework.context.annotation.Configuration;

import javax.inject.Inject;

@Configuration
public class CalculateSalary {
    private static final int daysInMonth = 22;
    private static final double plnRate = 1.0;
    @Inject
    CurrentRateController currentRate;

    public String calculateSalary(double salary, String code){
        NationalFee nationalFee = NationalFee.valueOf(code);
        double countryRate = code.equalsIgnoreCase("PL")
                ? plnRate
                : currentRate.getRate(nationalFee.getCountryCode());

        return String.valueOf(calculateDailySalary(salary, nationalFee, countryRate));
    }

    private Double calculateDailySalary(Double salary, NationalFee nationalFee, double rate){
        salary = salary - (salary * nationalFee.getTax()) - nationalFee.getFixedCost();
        salary = salary * rate / daysInMonth;
        return Math.round(salary * 100.0) / 100.0;
    }
}
