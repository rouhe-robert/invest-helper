import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import getCapitalIncomeMonthlyTax from '../../../../services/dwellings/getCapitalIncomeMonthlyTax';
import getMoneyFlowWithoutTax from '../../../../services/dwellings/getMoneyFlowWithoutTax';
import getMoneyFlowWithTax from '../../../../services/dwellings/getMoneyFlowWithTax';
import getMonthlyProfit from '../../../../services/dwellings/getMonthlyProfit';
import getOwnMoneyAmount from '../../../../services/dwellings/getOwnMoneyAmount';
import getPriceWithAllDebts from '../../../../services/dwellings/getPriceWithAllDebts';
import getProfitPercentageForInvestedMoney from '../../../../services/dwellings/getProfitPercentageForInvestedMoney';
import getProfitPercentageForPrice from '../../../../services/dwellings/getProfitPercentageForPrice';
import getTotalDebt from '../../../../services/dwellings/getTotalDebt';
import getTotalMonthlyPayment from '../../../../services/dwellings/getTotalMonthlyPayment';
import getPrice from '../../../../services/dwellings/getPrice';

const Analytics = ({
  bargainedAmount,
  capitalIncomeTaxRate,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  dwelling,
  rentEuros,
  rentingRate,
}) => {

  const capitalIncomeMonthlyTax = getCapitalIncomeMonthlyTax(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate,
    capitalIncomeTaxRate
  );

  const moneyFlowWithoutTax = getMoneyFlowWithoutTax(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate,
    debtPaymentYears
  );

  const moneyFlowWithTax = getMoneyFlowWithTax(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate,
    debtPaymentYears,
    capitalIncomeTaxRate
  );

  const monthlyProfit = getMonthlyProfit(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate
  );

  const ownMoneyAmount = getOwnMoneyAmount(
    dwelling,
    bargainedAmount,
    debtEquityRatio
  );

  const price = getPrice({
    bargainedAmount,
    price: dwelling.price
  });

  const priceWithAllDebts = getPriceWithAllDebts({
    bargainedAmount,
    dwellingRenovationDebt: dwelling.dwellingRenovationDebt,
    housingCooperativeRenovationDebt: dwelling.housingCooperativeRenovationDebt,
    price: dwelling.price
  });

  const profitPercentageForInvestedMoney = getProfitPercentageForInvestedMoney(
    dwelling,
    bargainedAmount,
    rentEuros,
    rentingRate,
    debtEquityRatio,
    debtIntrestRate
  );

  const profitPercentageForPrice = getProfitPercentageForPrice(
    dwelling,
    bargainedAmount,
    rentEuros,
    rentingRate,
    debtEquityRatio,
    debtIntrestRate
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
          <h5>Rahavirta</h5>
          Vuokra: {(rentEuros * (rentingRate / 12)).toFixed(2)}€/kk<br />
          Tuotto: {monthlyProfit.toFixed(2)}€/kk<br />
          Rahavirta ilman veroja: {moneyFlowWithoutTax.toFixed(2)}€/kk<br />
          Rahavirta verojen kanssa: {moneyFlowWithTax.toFixed(2)}€/kk
        </Col>
        <Col md="6">
          <h5>Laskutoimituksissa käytetty</h5>
          Velkasuhde ostohinnasta: {100 - debtEquityRatio}%<br />
          Korko: {debtIntrestRate}%<br />
          Velan takaisinmaksuaika: {debtPaymentYears} vuotta<br />
          Vuokrausaste: {rentingRate}kk vuodessa
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h5>Tuotto</h5>
          Tuotto ostohinnalle: {profitPercentageForPrice.toFixed(2)}%/vuosi<br />
          Tuotto velattomalle rahalle: {profitPercentageForInvestedMoney.toFixed(2)}%/vuosi
        </Col>
        <Col md="6">
          <h5>Kuukausikulut</h5>
          Hoitovastike: {dwelling.maintenanceCharge}€<br />
          Velan kuukausikulut yhteensä: {totalMonthlyPayment.toFixed(2)}€<br />
          Pääomatulovero: {capitalIncomeMonthlyTax.toFixed(2)}€
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h5>Hinta</h5>
          Velaton hinta: <strong>{price.toFixed(2)}</strong>€<br />
          Korjausvelan kanssa: <strong>{priceWithAllDebts.toFixed(2)}€</strong><br />
          Omaa rahaa käytettävä: {ownMoneyAmount.toFixed(2)}€<br />
          Velkaa yhteensä korjausvelan kanssa: {totalDebt.toFixed(2)}€
        </Col>
      </Row>
    </Container>
  )
};

export default Analytics;
