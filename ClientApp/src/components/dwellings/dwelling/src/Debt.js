import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import getAmountToPayToSeller from '../../../../services/dwellings/getAmountToPayToSeller';
import getBankLoan from '../../../../services/dwellings/getBankLoan';
import getBankLoanMonthlyIntrest from '../../../../services/dwellings/getBankLoanMonthlyIntrest';
import getBankLoanMonthlyPayment from '../../../../services/dwellings/getBankLoanMonthlyPayment';
import getDwellingRenovationDebtMonthlyIntrest from '../../../../services/dwellings/getDwellingRenovationDebtMonthlyIntrest';
import getDwellingRenovationDebtMonthlyPayment from '../../../../services/dwellings/getDwellingRenovationDebtMonthlyPayment';
import getHousingCooperativeRenovationDebtMonthlyIntrest from '../../../../services/dwellings/getHousingCooperativeRenovationDebtMonthlyIntrest';
import getHousingCooperativeRenovationDebtMonthlyPayment from '../../../../services/dwellings/getHousingCooperativeRenovationDebtMonthlyPayment';
import getPrice from '../../../../services/dwellings/getPrice';
import getPriceWithAllDebts from '../../../../services/dwellings/getPriceWithAllDebts';
import getTotalDebt from '../../../../services/dwellings/getTotalDebt';
import getTotalMonthlyPayment from '../../../../services/dwellings/getTotalMonthlyPayment';

const Debt = ({
  bargainedAmount,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  dwelling
}) => {
  const amountToPayToSeller = getAmountToPayToSeller(
    dwelling,
    bargainedAmount
  );

  const bankLoan = getBankLoan(
    dwelling,
    bargainedAmount,
    debtEquityRatio
  );

  const bankLoanMonthlyIntrest = getBankLoanMonthlyIntrest(
    dwelling,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate
  );

  const bankLoanMonthlyPayment = getBankLoanMonthlyPayment(
    dwelling,
    bargainedAmount,
    debtEquityRatio,
    debtPaymentYears
  );

  const dwellingRenovationDebtMonthlyIntrest = getDwellingRenovationDebtMonthlyIntrest(
    dwelling,
    debtIntrestRate
  );

  const dwellingRenovationDebtMonthlyPayment = getDwellingRenovationDebtMonthlyPayment(
    dwelling,
    debtPaymentYears
  );

  const housingCooperativeRenovationDebtMonthlyPayment = getHousingCooperativeRenovationDebtMonthlyPayment(
    dwelling,
    debtPaymentYears
  );

  const housingCooperativeRenovationDebtMonthlyIntrest = getHousingCooperativeRenovationDebtMonthlyIntrest(
    dwelling,
    debtIntrestRate
  );

  const price = getPrice(
    dwelling,
    bargainedAmount
  );

  const priceWithAllDebts = getPriceWithAllDebts(
    dwelling,
    bargainedAmount
  );

  const totalDebt = getTotalDebt(
    dwelling,
    bargainedAmount,
    debtEquityRatio
  );

  const totalMonthlyPayment = getTotalMonthlyPayment(
    dwelling,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate,
    debtPaymentYears
  );

  return (
    <Container>
      <Row>
        <Col md="6">
          <h5>Yhteenveto</h5>
          Hinta kaikilla veloilla: <strong>{priceWithAllDebts.toFixed(2)}€</strong><br />
          Velkaa yhteensä: {totalDebt.toFixed(2)}€<br />
          Velan kuukausikulut yhteensä: {totalMonthlyPayment.toFixed(2)}€
        </Col>
        <Col md="6">
          <h5>Laskutoimituksissa käytetty</h5>
          Velkasuhde ostohinnasta: {100 - debtEquityRatio}%<br />
          Korko: {debtIntrestRate}%<br />
          Velan takaisinmaksuaika: {debtPaymentYears} vuotta
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h5>Ostettaessa</h5>
          Asunnon hinta: {amountToPayToSeller.toFixed(2)}€<br />
          Asunnon velaton hinta: <strong>{price.toFixed(2)}€</strong><br />
          Taloyhtiövelan osuus: {dwelling.financingDebt.toFixed(2)}€<br />
          Pankkilaina: {bankLoan.toFixed(2)}€
        </Col>
        <Col md="6">
          <h5>Korjausvelasta tulevat velat</h5>
          Asunnon korjausvelka: {dwelling.dwellingRenovationDebt.toFixed(2)}€<br />
          Taloyhtiön korjausvelka: {dwelling.housingCooperativeRenovationDebt.toFixed(2)}€
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <h5>Kuukausittaiset velkakulut</h5>
          Rahoitusvastike: {dwelling.financingDebtCharge.toFixed(2)}€<br />
          Pankkilainan kuukausilyhennys: {bankLoanMonthlyPayment.toFixed(2)}€<br />
          Pankkilainan kuukausikorko: {bankLoanMonthlyIntrest.toFixed(2)}€<br />
          Asunnon korjausvelan kuukausilyhennys: {dwellingRenovationDebtMonthlyPayment.toFixed(2)}€<br />
          Asunnon korjausvelan kuukausikorko: {dwellingRenovationDebtMonthlyIntrest.toFixed(2)}€<br />
          Taloyhtiön korjausvelan kuukausilyhennys: {housingCooperativeRenovationDebtMonthlyPayment.toFixed(2)}€<br/>
          Taloyhtiön korjausvelan kuukausikorko: {housingCooperativeRenovationDebtMonthlyIntrest.toFixed(2)}€
        </Col>
      </Row>
    </Container>
  );
}

export default Debt;
