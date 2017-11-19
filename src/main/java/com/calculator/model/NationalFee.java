package com.calculator.model;

public enum NationalFee {
    PL("PLN", 0.19, 1200),
    UK("GBP", 0.25, 600),
    DE("EUR", 0.20, 800);

    private final String countryCode;
    private final double tax;
    private final double fixedCost;

    private NationalFee(String countryCode, double tax, double fixedCost) {
        this.countryCode = countryCode;
        this.tax = tax;
        this.fixedCost = fixedCost;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public double getTax() {
        return tax;
    }

    public double getFixedCost() {
        return fixedCost;
    }
}
