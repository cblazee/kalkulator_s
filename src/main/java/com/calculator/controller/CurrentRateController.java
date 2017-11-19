package com.calculator.controller;

import com.calculator.model.NBPResponse;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class CurrentRateController {

    private static final String serviceUri = "http://api.nbp.pl/api/exchangerates/rates/a/";
    private static final String format = "?format=json";

    @ResponseBody
    public Double getRate(String code) {
        RestTemplate restTemplate = new RestTemplate();
        String uri = serviceUri + code + format;
        NBPResponse response = restTemplate.getForObject(uri, NBPResponse.class);
        return Double.parseDouble(response.getRates().get(0).getMid());
    }
}
