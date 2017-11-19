# kalkulator_s
Kalkulator wynagrodzeń B2B


1. Dodanie nowej waluty odybwa się przez dodanie wpisu zgodnego
    ze schematem "PL("PLN", 0.19, 1200)" w pliku NationalFee.java
    Oznaczenia odpowiednio:
    'PL' - nazwa wpisu
    'PLN' - skrót waluty zgodny z wartością 'code' z tabeli 'a'
            dostępnej pod adresem: http://api.nbp.pl/api/exchangerates/tables/a/
    '0.19' - wartość procentowa podatku w danym kraju
    '1200' - wartość opłaty stałej w danym kraju
