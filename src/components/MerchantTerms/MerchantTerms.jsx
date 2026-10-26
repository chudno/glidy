import "./MerchantTerms.scss"

const MerchantTerms = (props) => {
  return (
    <section className="merchant-terms container container--sm">
      <div className="merchant-terms__header">
        <h1 className="merchant-terms__title">Merchant Terms & Conditions</h1>
        <p className="merchant-terms__subtitle">
          Terms and Conditions for Payment Card and Alternative Payment Method
          Acquiring Services
        </p>
      </div>
      <div className="merchant-terms__body">
        <h2 className="visually-hidden">Main Terms and Conditions list</h2>
        <ol className="merchant-terms__list">
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Definitions</h3>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Alternative Payment Method”</span>
                 or “APM” means a payment method (other than Card) which We are
                able and have agreed to process (as notified by us to you from
                time to time);
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Alternative Payment Method Payment”</span>
                means a payment or other transaction (such as refunds or
                reversals) using an APM, regardless of whether such APM is
                prefunded or instantly funded using another payment instrument
                linked to the APM.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Alternative Payment Method Provider”</span>
                means a third party which regulates or is responsible for
                processing any APMs and which is in any arrangement with us in
                connection with which it enables us and you to (a) accept
                payment by End Users using APMs; and (b) receive value in
                respect of such payments. Acquirer may also act as APM
                Providers.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Alternative Payment Method Rules”</span>
                means the rules and procedures governing the making and
                accepting of APM Payments as stipulated by the relevant APM
                Provider, including but not limited to payment agreements
                between an APM Provider and intermediary payment service
                providers and/or us.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Alternative Payment Method User”</span>
                is the person or entity holding and authorised to use an APM
                and/or APM account; in the context of the purchase of goods or
                services, the term APM User shall be deemed to include a
                reference to the customer purchasing the goods or services, if
                different from the APM User.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Application”</span>
                means a written or electronic application by you to us including
                a statement of your financial condition, a description of the
                characteristics of your business or organisation, and related
                information you have previously or concurrently submitted to us,
                including credit and financial information, to induce us to
                enter into this Agreement with you and that has induced us to
                process your Transactions under this Agreement.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Card”</span>
                means any payment card or virtual payment card issued to a
                Cardholder by or on behalf of a member of a Card Scheme.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Cardholder”</span>
                is the person or entity to whom a Card is issued or who is
                otherwise authorised to use a Card; in the context of the
                purchase of goods or services, the term Cardholder shall be
                deemed to include a reference to the customer purchasing the
                goods or services, if different from the Cardholder.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Card Issuer”</span>
                is the person or entity issuing a Card to a Cardholder under the
                relevant Card Scheme Rules and as a member of the relevant Card
                Scheme.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Card Scheme”</span>
                means any payment card scheme, including but not limited to
                VISA, MasterCard®, Discover and American Express®.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Card Scheme Rules”</span>
                means any set of bylaws, rules, regulations and policies set by
                any Card Scheme from time to time.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Card Transaction”</span>
                is a payment transaction between you and a Cardholder using a
                Card for the purchase of goods or services or the return or
                refund of such purchase.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Chargeback”</span>
                is a reversal of a Transaction or APM Payment you previously
                presented to us pursuant to this Agreement and the relevant Card
                Scheme Rules or APM Provider Rules.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Confidential Information”</span>
                means any information which is marked as “confidential” or
                “proprietary” or should reasonably be expected to be
                confidential or proprietary having regard to the context of
                disclosure or the nature of the information; without prejudice
                to the generality of the foregoing, the terms of this Agreement
                as well as business plans, data, strategies, methods, customer
                and client lists, technical specifications, transaction data and
                Cardholder data shall be deemed confidential.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“EIBOR”</span>
                is the Emirates Interbank Offered Rate.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Merchant”, “you” or “your”</span>
                means the individual or entity entering into this Agreement with
                us.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Merchant Payment Account”</span>
                means the payment account held by you with us.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Merchant Payment Account Balance”, “Balance”</span>
                is the balance held in your Merchant Payment Account at any
                given time.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Merchant Portal”</span>
                means the website interface providing the Merchant with
                Transaction Data.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Payment Gateway Interface”</span>
                means the IT technology provided to you by us in order to accept
                and process payments.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Payment Marks”</span>
                means any trademark, brand, emblem, design, display or logo
                (whether registered or not) owned by or licensed to a Card
                Scheme or APM Provider.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">"SYSTEM", "we", "our", or "us"</span>
                means Glide Payment - FZCO, Register No. 70967.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Recurring Transactions”</span>
                are repeated transactions in the system, which are on the basis
                of a contract between the Payer and the Merchant, with a
                predetermined interval of time.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Reporting period”</span>
                means a period of 30 (thirty) calendar days starting at 00:00 of
                the first day of the calendar month and ending at 23:59 of the
                last day of the calendar month. The initial Reporting Period
                commences on the Commencement Date.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Retrieval Request”</span>
                is a request for information by a Cardholder, Card Scheme or
                member of a Card Scheme, or by an APM User or APM Provider,
                relating to a claim or complaint concerning a Transaction.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Services”</span>
                has a meaning ascribed to it in clause 3.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Settled Transaction”</span>
                is a Transaction the value of which has been settled by us to
                you.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Submitted Transaction”</span>
                is a Transaction submitted by us to a Card Scheme for
                settlement.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Transaction”</span>
                means a Card Transaction or APM Payment, as the case may be.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Transaction Data”</span>
                is the written or electronic record of a Transaction, including
                but not limited to an authorisation code or settlement record.
              </p>

              <p className="merchant-terms__list-item-text">
                <span className="merchant-terms__text-bold">“Reserve amount”</span>
                means monetary funds secured in our favour in accordance with
                this Agreement to guarantee the fulfilment of your obligation
                under the Agreement hereof.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Scope</h3>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                2.1. These Terms and Conditions for Payment Card and APM
                Acquiring Services apply to the payment card acquiring services
                and/or APM transaction acquiring services (the “Terms” or/and
                any other contractual documentation, the “Agreement”) provided
                by us to you and form an integral and legally binding part of
                the Agreement between you and us, of which this appendix is part
                of.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                2.2. The Merchant confirms his/her consent to the terms of the
                Agreement by sending an application on the System website. The
                consent to conclude the Agreement on the part of the System is
                the granting of the Merchant access to the System and the
                opening of a Merchant account for him/her. The Agreement is
                considered concluded from the moment the Merchant account is
                opened. The System may refuse the Merchant to conclude the
                Agreement. In this case, the Merchant account is not opened.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                2.3. In case of any conflict between these Terms and any
                provisions agreed between the parties on the Amendments and/or
                Additional Agreements, the provisions of the Amendments and/or
                Additional Agreements shall take precedence insofar as this is
                necessary for the resolution of such conflict.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                2.4. You may not use our services if you are residing in any of
                the following OFAC sanctioned countries or other countries which
                are subject to sectoral or other sanctions imposed by applicable
                laws. This list is not exhaustive and we may, in our sole
                discretion, discontinue or restrict our services in other
                countries at any time and without prior notice.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Our Services</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                3.1. Under the terms of this Agreement, we provide you with the
                following services:
              </p>
              <p className="merchant-terms__list-item-text">
                3.1.1. processing services, including acquiring services;
              </p>
              <p className="merchant-terms__list-item-text">
                3.1.2. money remittance services;
              </p>
              <p className="merchant-terms__list-item-text">
                3.1.3. chargeback management;
              </p>
              <p className="merchant-terms__list-item-text">
                3.1.4. payment gateway services.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                3.2. We shall provide the services with due skill and care.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                3.3. Additional services may be provided under separate service
                terms agreed with you from time to time.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Payment Gateway Interface
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                4.1. You shall install or host the Payment Gateway Interface on
                your website in accordance with the installation instructions or
                other communication provided by us.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                4.2. We shall not be liable for any failure to correctly install
                or operate the Payment Gateway Interface where installation does
                not comply with such instructions.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Accepting Card Payments
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.1. You shall accept and honour any valid Card properly
                tendered by a Cardholder.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.2. You are not permitted to accept or request Recurring
                Transactions without our prior permission.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.3. When accepting Transactions, you must record the following
                information:
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.1. a brief description of goods or services sold, returned
                or cancelled;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.2. the price of goods/services including applicable taxes
                and adjustments;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.3. your name (recognisable to Customers) and address;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.4. a contact telephone number;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.5. applicable terms and conditions;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.6. the exact date any free trial ends;
              </p>
              <p className="merchant-terms__list-item-text">
                5.3.7. any additional information required under Card Scheme
                Rules.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.4. You must store the above information in its original form
                for at least 60 months, or longer if required under Card Scheme
                Rules.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.5. We will forward to you any Retrieval Request we cannot
                satisfy with the information held on file. You must respond
                within 3 business days (or a shorter period if required under
                Card Scheme Rules) by providing legible documentation and the
                results of your investigation. You acknowledge that failing to
                fulfil a Retrieval Request may result in an irreversible
                Chargeback.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.6. At the time of accepting a Transaction, you must disclose
                to the Customer:
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.1. your name and address, including electronic contact
                details and telephone number;
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.2. terms and conditions, including cancellation rights;
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.3. delivery policy;
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.4. sales return and refund policy;
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.5. privacy or data protection policy;
              </p>
              <p className="merchant-terms__list-item-text">
                5.6.6. regulatory authority details, if applicable.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.7. If you do not have a delivery or refund policy, you must
                prominently inform the Cardholder before completing the
                purchase.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.8. You must notify us of any material change to the above
                information if such change may adversely affect your Chargeback
                rates.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.9. You may not impose any surcharge or finance charge, nor
                require Cardholders to pay your fees, where prohibited by Card
                Scheme Rules. You may not set minimum or maximum purchase
                amounts unless permitted by Card Scheme Rules.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.10. Disputes between you and Cardholders shall be resolved
                directly between the parties. We shall not be obliged to
                participate in such disputes.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.11. You may not seek to accept payments through the use of our
                services for any of the following:
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.1. Gambling services (including but not limited to online
                casinos, sports betting, spread betting, reverse auctions and
                lotteries);
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.2. Get rich quick schemes, Ponzi schemes, snow ball
                schemes, investment clubs or similar activities;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.3. Adult content or modelling agencies;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.4. Payment services, virtual wallets, cash services,
                foreign exchange services, prepaid cards, virtual currencies;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.5. Mass email services, SMS services or customer marketing
                lists;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.6. Astrological services, paranormal services, counselling,
                psychological services, online health assessment, star naming
                services;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.7. Prescription drugs, prohibited substances or their
                components; drug paraphernalia;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.8. Fake or counterfeit goods, novelty IDs;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.9. Dangerous or restricted goods (including but not limited
                to explosives, radioactive materials, toxic substances,
                batteries, fireworks);
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.10. Weapons, knives and ammunition;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.11. Protected works of art, history and culture;
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.12. Restricted electronics (such as cable TV decoders,
                radars and surveillance equipment);
              </p>

              <p className="merchant-terms__list-item-text">
                5.11.13. Any other goods or services whose sale, provision,
                delivery, offering or marketing is prohibited or restricted in
                the jurisdiction of business conduct or in any jurisdiction
                where any of its customers is located.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                5.12. The list of prohibited goods or services in clause 5.11
                may be changed or extended by us at any time by notice to you.
                If you provide goods or services that fall within the subsequent
                extension of the list in clause 5.11, you shall immediately
                terminate the provision of such goods or services. In the event
                you will not proceed to such termination, we retain the right to
                terminate the effect of this Agreement. If you are in any doubt
                whether your goods or services fall under any of the categories
                listed, you must first consult with us before offering such
                goods or services.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Accepting APM Payments
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                6.1. The provisions of Section 5 apply to APM Payments
                accordingly.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                6.2. References to Cards/Cardholders/Card Scheme Rules shall be
                deemed to refer to APM/APM Users/APM Rules respectively.
              </p>
            </div>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                6.1. The provisions of clause 5 shall apply to APM Payments.
              </p>
            </div>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                6.2. Any references to Cards, Cardholders or Card Scheme Rules
                shall be a respective reference to:
              </p>
              <p className="merchant-terms__list-item-text">
                – APM, APM Users or APM Rules.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Authorisation Procedure and Submission of Card Transactions
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.1. Every Card Transaction you submit to us must be processed
                through the Payment Gateway Interface provided to you by us for
                this purpose.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.2. You are required to obtain authorisation codes for all
                Transactions. You acknowledge that the authorisation code of a
                Transaction indicates only (i) that the Card used for the
                Transaction has a valid card number, and (b) that sufficient
                balance is available for the Transaction at the time the
                authorisation is given, but does not constitute a representation
                from us or the relevant Card Scheme or the issuer of a Card that
                a particular Transaction is in fact a valid or undisputed
                transaction entered into by the Cardholder.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.3. You undertake that all Transactions submitted to us for
                authorisation shall also be cleared and settled through us and
                not through any third-party service provider.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.4. You are required to submit your Transaction Data to us no
                later than the next business day immediately following the day
                that such Transaction Data is generated. Failure to do so can
                result in higher fees and other costs and increased Chargebacks.
                For debit card transactions that are credits to a Customer’s
                account, you agree to transmit such Transaction Data to us
                within 24 hours of receiving the authorisation for such credit.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.5. When submitting a Transaction to us, you agree to the
                applicable Card Scheme Rules with respect to the Transactions in
                question. We will forward the submitted Transaction to the
                appropriate Card Scheme. We may use an intermediary or agent for
                this purpose and you agree that we may share the same
                information with such intermediary or agent as with the
                applicable Card Scheme provided that such intermediary or agent
                has been approved by the applicable Card Scheme for this
                purpose.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.6. You hereby authorise us to submit Transactions and all
                relevant Transaction Data to the applicable Card Scheme and to
                share with the Card Scheme such information from your
                Application as may be required to approve your acceptance of the
                Card used for the Transaction.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.7. We reserve the right to refuse to process any Transaction
                submitted by you if we reasonably determine that:
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.1. no proper authorisation code was recorded;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.2. any Transaction Data is incomplete or incorrect;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.3. any security feature of the Card used for a Transaction
                may have been compromised;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.4. the Transaction is or will become uncollectible from the
                Cardholder or Card Issuer to which the Transaction would
                otherwise be charged;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.5. the Transaction is likely to be charged back by the
                Cardholder or the Card Issuer;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.6. we suspect fraud, money laundering or other illegal
                activity of any kind;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.7. you may be in breach of this Agreement or applicable Card
                Scheme Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                7.7.8. a Card Scheme has notified us that it intends to impose a
                fine or penalty on us in connection with the processing of your
                Transactions;
              </p>
              <p className="merchant-terms__list-item-text">
                {" "}
                7.7.9. you have reached any transaction limits agreed with you
                or imposed on you by us; or
              </p>
              <p className="merchant-terms__list-item-text">
                {" "}
                7.7.10. any security you provided to us has or will become
                insufficient to cover all claims we may have against you under
                this Agreement.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                7.8. If you allow a price adjustment, return of merchandise, or
                cancellation of goods or services in connection with a Settled
                or Submitted Transaction, you will prepare and deliver to us
                Transaction Data reflecting such refund or adjustment within 3
                days of receiving the Cardholder’s request for such refund or
                adjustment. The amount of the refund or adjustment cannot exceed
                the amount shown as the total on the original Transaction Data
                except by the exact amount required to reimburse the Cardholder
                for postage that the Cardholder paid to return merchandise. You
                are not allowed to accept cash or any other payment or
                consideration from a Cardholder in return for preparing a refund
                to be deposited to the Cardholder’s account; nor may you give
                cash refunds to a Cardholder in connection with a Settled or
                Submitted Transaction, unless permitted or required by law.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Processing of APM Payments
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                8.1. Every APM Payment you submit to us must be processed
                through the Payment Gateway Interface provided to you by us for
                this purpose.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                8.2. You acknowledge that APM Payments, like Card Transactions,
                are not necessarily final and are subject to Chargebacks as
                described in clause 12 and any applicable APM Rules.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                8.3. You shall not attempt to process APM Payments through us if
                a previous attempt to process the payment in question through a
                different payment service provider or the APM Provider has
                failed or was otherwise rejected.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                8.4. You hereby authorise us to share with the relevant APM
                Provider such information from your Application as may be
                required to process an APM Payment initiated on your behalf.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                8.5. We reserve the right to refuse to process any Transaction
                submitted by you if we reasonably determine that:
              </p>

              <p className="merchant-terms__list-item-text">
                8.5.1. any Transaction Data is incomplete or incorrect;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.2. any security feature of the Card used for a Transaction
                may have been compromised;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.3. the Transaction is or will become uncollectible from the
                APM User or APM Provider to which the Transaction would
                otherwise be charged;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.4. the Transaction is likely to be charged back by the APM
                User or the APM Provider;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.5. we suspect fraud, money laundering or other illegal
                activity of any kind;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.6. you may be in breach of this Agreement or applicable APM
                Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                8.5.7. you have reached any transaction limits agreed with you
                or imposed on you by us; or
              </p>

              <p className="merchant-terms__list-item-text">
                8.5.8. any security you provided to us has or will become
                insufficient to cover all claims we may have against you under
                this Agreement.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Merchant Payment Account
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.1. Funds shall be made available to you by a credit to your
                Merchant Payment Account. You can access your Merchant Payment
                Account through the Merchant Portal.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.2. The Merchant Payment Account is not a bank account. You
                acknowledge that your Merchant Payment Account is not covered by
                any depositor protection scheme. The funds held in your Merchant
                Payment Account do not accrue interest.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.3. The Merchant Payment Account is not an account to make
                payments to third parties but to hold your pending deduction of
                Balance Deductibles and settlement of funds to your Settlement
                Account (each as defined below).
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.4. Funds shall be credited to your Merchant Payment Account on
                the day we receive these funds from the payer’s payment service
                provider or other third party settling the payment funds to us.
                If we receive such funds on a non-business day or after 5pm UTC
                +4 time on a business day, we may credit the funds to your
                Merchant Payment Account on the next business day. We reserve
                the right to only credit your Merchant Payment Account with such
                sums that remain due to you after deduction of any Balance
                Deductible, provided that such deduction shall either be shown
                on your Merchant Payment Account together with the credit of the
                remaining funds, or shall be separately notified to you.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.5. You shall have no claim against us for crediting of funds
                to your Merchant Payment Account before we have received such
                funds from the relevant Card Scheme or APM Provider.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.6. Subject to clause 10.2, we may deduct any of the following
                items (each a “Balance Deductible”) from your Merchant Payment
                Account Balance at any time when due:
              </p>

              <p className="merchant-terms__list-item-text">
                9.6.1. fees charged by us;
              </p>
              <p className="merchant-terms__list-item-text">
                9.6.2. refunds and reversals;
              </p>
              <p className="merchant-terms__list-item-text">
                9.6.3. adjustments and Chargebacks;
              </p>
              <p className="merchant-terms__list-item-text">
                9.6.4. Reserve Amounts;
              </p>
              <p className="merchant-terms__list-item-text">
                9.6.5. interest payable to us; and
              </p>
              <p className="merchant-terms__list-item-text">
                9.6.6. any fees, charges, fines, assessments, penalties or other
                liabilities that may be imposed on us by the Card Schemes or APM
                Providers and all related costs and expenses incurred or likely
                to be incurred by us in connection with the processing of your
                Transactions.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.7. In case the Balance Deductibles exceed your available
                Merchant Payment Account Balance, we may at our discretion
                determine which Balance Deductibles shall be deducted to which
                extent from your Merchant Payment Account Balance. The remainder
                of the Balance Deductibles may either be debited from your
                Merchant Payment Account (resulting in a negative Merchant
                Payment Account Balance) or may be otherwise collected from you
                as set out in clause 10.2 or by one or more of the following:
              </p>

              <p className="merchant-terms__list-item-text">
                9.7.1. demand from you immediate payment including but not
                limited to engaging a debt collection agency or commencing legal
                action;
              </p>

              <p className="merchant-terms__list-item-text">
                {" "}
                9.7.2. set off all or part of any such Balance Deductibles from
                any claim you may have against us that is not represented by the
                Merchant Payment Account Balance;
              </p>

              <p className="merchant-terms__list-item-text">
                9.7.3. withhold all future payments to you until all outstanding
                amounts are paid; and
              </p>

              <p className="merchant-terms__list-item-text">
                9.7.4. pursue any other remedies we may have at law or in
                equity.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.8. Any negative Merchant Payment Account Balance or payment
                claim against you which is overdue shall accrue interest in an
                amount of 10% above the then current six months EIBOR rate.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                9.9. If you hold multiple Merchant Payment Accounts, we may set
                off any positive balance held in one Merchant Payment Account
                against any negative balance held in another Merchant Payment
                Account.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Settlement and Settlement Account
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.1. In order to receive funds from your Merchant Payment
                Account, you are required to open and maintain a bank account at
                a credit institution of your choice, provided that (a) this
                credit institution is a member of a recognised payments clearing
                and settlement system and that (b) we have not rejected your
                chosen bank account within reasonable time of your application.
                Depending on the nature of your business or where your business
                is located or your customers are residing, we may impose
                restrictions on where you must hold the relevant bank account.
                You must communicate to us such details of your bank account as
                we may reasonably require to settle funds into this account (and
                any such designated account shall be your “Settlement Account”).
                You must give us at least 10 days’ notice of any changes to your
                Settlement Account. You may only close your current Settlement
                Account if you provide us with details of a new account that you
                designate as your new Settlement Account. You are solely liable
                for all fees and costs associated with your Settlement Account.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.2. Within 10 business days after the end of every Reporting
                Period we shall transfer the Merchant Payment Account Balance on
                the end of the Reporting Period (but no more than the current
                balance less Reserve amount) to your Settlement Account (a
                “Settlement Payment”). We shall ensure that a Settlement Payment
                reaches the credit institution where your Settlement Account is
                held on the next business day following the business day on
                which we start to process your request, however, we are not
                responsible for the time that these funds are credited to your
                Settlement Account as this is the responsibility of your credit
                institution.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.3. Instead of deducting the Balance Deductibles from your
                Merchant Payment Account Balance, we may in our sole discretion
                debit the Settlement Account with all or part of any Balance
                Deductibles by direct debit or otherwise collect such amounts
                from you; for this purpose, we may request that you give us and
                maintain for our benefit a direct debit mandate over your
                Settlement Account for any amounts owed by you to us. You must
                ensure that your Settlement Account at all times holds a
                sufficient balance that any direct debit we reasonably make is
                covered and not returned due to insufficient funds.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.4. We shall send you the Act for services rendered
                (hereinafter the "Act") by email or share it in your Merchant
                portal no later than the fifteenth day of the month following
                the reporting month. In the case that no Transactions were
                executed during the reporting period, we are entitled not to
                provide an Act upon your request.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.5. If within three calendar days from the date of receipt of
                the Act you do not send your objections, the respective services
                are considered to be rendered in full and in a proper manner.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.6. Upon receipt of your objections, if the objections
                regarding the amounts contained in the Act will be deemed
                justified, the Parties undertake, within three working days from
                the date of receipt of the objections, to draw up a statement of
                discrepancies and take into account the amounts contained in it
                the Act, for the next reporting period.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.7. We may provide the original of the Act in case of receipt
                of the signed original Act from you.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.8. In case if you receive a signed original of the Act, you
                must send us one signed original of the Act within three working
                days of the receipt of the Act.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                10.9. The provisions of this paragraph 10 apply, unless
                otherwise provided by Service Agreement Fee Schedule.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Reserve and Security
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.1. At any time during this Agreement and for a period of up
                to thirteen months after the termination of this Agreement, we
                may temporarily suspend or delay payments to you and/or
                designate in our discretion an amount of funds that we maintain
                in order to protect us against the risk of actual or anticipated
                Chargebacks or otherwise against the risk of your actual or
                anticipated failure to meet your obligations under this
                Agreement or relevant Card Scheme Rules or APM Rules (such
                funds, in whatever form given or maintained, hereinafter
                referred to as the “Reserve Amount”) as stated in paragraph 5 of
                the Agreement.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.2. Immediately upon request, you are required to pay us
                sufficient funds to cover the Reserve Amount and failure to do
                so entitles us to take any of the actions outlined in clause 9.7
                or to debit your Settlement Account with all or part of the
                Reserve Amount under a direct debit mandate you may have given
                us over your Settlement Account or, as part of a security, over
                any other bank or payment account.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.3. The Reserve Amount shall at all times consist of
                sufficient funds to cover any unbilled service fees plus our
                estimated exposure based on reasonable criteria for Chargebacks,
                returns, unshipped merchandise or other claims of Cardholders,
                Card Issuers, APM Users or APM Providers against you and any
                liabilities imposed on us by the Card Schemes.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.4. We may (but are not required to) apply funds in the
                Reserve Amount toward, and set off any funds that would
                otherwise be payable to you against the satisfaction of any
                amounts which are or may become due from you under or in
                connection with this Agreement.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.5. You will have no legal right or interest in the funds in
                the Reserve Amount; provided, however, that upon satisfaction of
                all of your obligations under this Agreement, we will pay to you
                any funds then remaining in the Reserve Amount. In this case,
                the Reserve Amount represents a monetary claim against us. Under
                no circumstances shall the Reserve Amount be deemed to
                constitute a deposit or otherwise a repayable sum held by us on
                your behalf.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                11.6. Effective upon the establishment of a Reserve Amount, you
                irrevocably grant to us a security interest in any interest you
                may now have or later acquire in any and all funds, together
                with the proceeds thereof, that may at any time be in our
                possession and would otherwise be payable to you pursuant to the
                terms of this Agreement. You agree to execute and deliver to us
                such instruments and documents (including, without limitation,
                direct debit mandates, legal charges, security deposits,
                guarantees and other security arrangements) that we may
                reasonably request to establish, confirm, maintain, use or
                realise the security interests and rights of set-off set forth
                in this Agreement.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Chargebacks</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.1. You or we may receive a Chargeback from a Cardholder or
                Card Scheme or an APM User or an APM Provider for a number of
                reasons under the Card Scheme Rules or APM Rules. The following
                are some of the most common reasons for Chargebacks, however,
                this is not intended to be an exhaustive list of possible
                Chargeback reasons:
              </p>

              <p className="merchant-terms__list-item-text">
                12.1.1. your failure to issue a refund to a Cardholder or APM
                User upon the return or non-delivery of goods or services;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.2. the goods or services you delivered were defective,
                insufficient or not as described;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.3. a required authorisation code was not obtained;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.4. the Transaction Data was prepared incorrectly or
                fraudulently;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.5. we did not receive your response to a Retrieval Request
                within seven business days or any shorter time period required
                by the Card Scheme Rules or APM Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.6. the Cardholder or APM User disputes the Transaction or
                the authenticity of the approval of the Transaction or claims
                that the Transaction is subject to a set-off, defendants or
                counterclaim;
              </p>
              <p className="merchant-terms__list-item-text">
                12.1.7. the Cardholder or APM User refuses to make payment for a
                Transaction because, in the Cardholder’s or APM User’s
                good-faith opinion, a claim or complaint has not been resolved
                or has been resolved in an unsatisfactory manner.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.2. It is agreed that, in any of the above stated events, any
                chargeback that is addressed to us and/or you will be charged to
                you.
              </p>
              <p className="merchant-terms__list-item-text">
                12.3. You acknowledge that, under these circumstances, the fact
                that an authorisation code was obtained does not mean that a
                particular Transaction is a valid or undisputed transaction
                entered into by the actual Cardholder or APM User.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.4. If you are receiving an excessive or unusual amount of
                Chargebacks, as determined by the Card Schemes or applicable APM
                Rules, or exceed the Chargeback limits set by us or agreed
                between us, in addition to our other remedies under this
                Agreement we may take the following actions:
              </p>

              <p className="merchant-terms__list-item-text">
                12.4.1. review your internal procedures relating to acceptance
                of Cards and APM Payments and notify you of new procedures you
                should adopt in order to avoid future Chargebacks;
              </p>
              <p className="merchant-terms__list-item-text">
                12.4.2. notify you of new or increased fees we will charge you
                to process your Chargebacks;
              </p>
              <p className="merchant-terms__list-item-text">
                12.4.3. pursuant to clause 11, collect from you a Reserve Amount
                or suspend Settlement Payments in an amount reasonably
                determined by us to be sufficient to cover anticipated
                Chargebacks and all related fees, expenses, and fines;
              </p>
              <p className="merchant-terms__list-item-text">
                12.4.4. terminate the Agreement with immediate effect or such
                notice period as notified to you in writing.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.5. You agree to indemnify us against any and all Card Scheme
                or APM Provider fees and fines assessed against us or payable by
                us in connection with the processing of your Transactions.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.6. In the event of a Chargeback for which you have reimbursed
                us or we have otherwise obtained compensation from you, in the
                case of a Card Transaction you may resubmit relevant transaction
                data for a second presentment in accordance with Card Scheme
                Rules provided that you act in good faith and believe, based on
                reasonable evidence available to you after enquiry with the
                Cardholder and the Card Issuer, that the Chargeback has been
                made in error. You must not attempt the re-presentment of
                Transaction Data if the Transaction or the underlying purchase
                is in any way disputed by the Cardholder or the Card Issuer. We
                may refuse the re-presentment of your Transaction Data to the
                relevant Card Scheme if you have not reimbursed or otherwise
                compensated us for the original Chargeback or we reasonably
                believe that the re-presentment of the Transaction is likely to
                be challenged or rejected by the Cardholder, Card Issuer or the
                relevant Card Scheme or may result in a second Chargeback,
                unless you have provided sufficient funds to cover any
                applicable rejection or arbitration fees payable to the relevant
                Card Scheme and we anticipate no adverse effect on imposed
                chargeback ratios or our standing with the relevant Card Scheme.
              </p>
            </div>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.7. You shall bear all fees and costs associated with a
                re-presentment of Transaction Data and any subsequent rejection,
                second Chargeback or arbitration fees.
              </p>
            </div>
            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                12.8. The re-presentment of Transactions may be subject to
                minimum transaction amounts set by us or the Card Schemes.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Fees and Pricing
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                13.1. For the services rendered to you, you agree to pay us the
                fees set out in this Agreement or any ancillary documentation.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                13.2. We may change our fees, charges and discounts to the
                extent that these changes result from:
              </p>
              <p className="merchant-terms__list-item-text">
                13.2.1. changes in Card Scheme or APM Provider fees, charges and
                discounts (such as interchange and other charges);
              </p>
              <p className="merchant-terms__list-item-text">
                13.2.2. changes in pricing any third party provider of the
                product or service used by us;
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                13.3. We will notify you of any such changes in writing. The
                change will come into effect 30 (thirty) days after receipt of
                the change notice or after the time period specified in the
                change notice.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                13.4. You acknowledge that Settlement fee, Chargeback fee and
                Chargeback processing fee shall be charged in currency specified
                by us in Fee Schedule. If the currency of your Settlement fee,
                Chargeback fee and Chargeback processing fee is not the same as
                the currency of your Settlement Account, we will convert
                Settlement fee, Chargeback fee and Chargeback processing fee at
                our internal exchange rate due to the FX costs.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Merchant Portal</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                14.1. You may access any Transaction Data through the Merchant
                Portal on our website, using the login details provided to you.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                14.2. You must keep the login credentials of the Merchant Portal
                safe at all times. Our personnel will never ask you to provide
                your password to us or to a third party. Any message you receive
                or website you visit that asks for your password, other than our
                website, should be reported to us immediately. In the event you
                disclose your password to any other website, you bear the
                liability of any potential loss.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Display of Payment Marks
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                15.1. You are prohibited from using Payment Marks other than as
                expressly authorised by us in this Agreement or in writing.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                15.2. You must only use Payment Marks in a way that strictly
                adheres to the usage guidelines promulgated by the relevant Card
                Scheme or APM Provider from time to time. If you are in any
                doubt over the correct usage of a Payment Mark you must first
                seek our approval and instructions before using the Payment
                Mark.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                15.3. You must at all times follow any reasonable instructions
                or guidelines given to you by us in relation to the use of a
                Payment Mark; in particular, but without prejudice to the
                generality of the foregoing, if instructed by us you must
                immediately cease to use a Payment Mark and remove or procure
                the removal, at your cost, of any Payment Mark from any location
                it was displayed.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                15.4. You shall indemnify us against any claim by a Card Scheme
                or APM Provider or any third party for infringement of
                intellectual property rights or licensing arrangements relating
                to Payment Marks arising from your use of any Payment Mark in
                breach of this Agreement or relevant Card Scheme Rules or APM
                Rules.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                15.5. It is understood that only we have the right of commercial
                exploitation of the payment mark. Nothing in this Agreement
                shall be deemed to give you or any third party any intellectual
                property rights over the Payment Marks and any licence or
                authorisation to use or display the Payment Marks shall be
                revocable at any time.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Liability</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.1. We will use reasonable efforts to correct any Transaction
                Data to the extent that such errors have been caused by us or by
                malfunctions of our processing systems.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.2. Under no circumstances, subject only to clause 16.5, will
                our liability for our failure of performance under this
                Agreement exceed the total fees paid to us under this Agreement
                (net of Card Scheme fees, third party fees, interchange,
                assessments, and fines) for the six months prior to the time the
                event giving rise to the liability arose.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.3. Under no circumstances, subject only to clause 16.5, shall
                we be liable to you for any of the following types of loss or
                damage even if, in each case, you have been advised of the
                possibility of such loss or damage:
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.1. special, indirect or consequential loss;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.2. pure economic loss, costs, damages or charges;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.3. loss of profits or revenue;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.4. loss of use;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.5. loss of opportunity, contracts, business or anticipated
                savings;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.6. loss of goodwill or damage to reputation;
              </p>
              <p className="merchant-terms__list-item-text">
                16.3.7. loss or damage arising from loss, damage or corruption
                of any data.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.4. The foregoing exclusions of liability shall also apply to
                any claim of repudiatory breach but not to wilful abandonment of
                this Agreement on our part.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.5. The exclusions and limitations of liability set out in
                clauses 16.2 to 16.4 (inclusive) do not apply to (and no
                liability limit shall apply to):
              </p>
              <p className="merchant-terms__list-item-text">
                16.5.1. liability arising from death or injury to persons caused
                by negligence;
              </p>
              <p className="merchant-terms__list-item-text">
                16.5.2. our obligation to pay to you any Payable Settlement to
                the extent that it is due and undisputed;
              </p>
              <p className="merchant-terms__list-item-text">
                16.5.3. liability arising as a result of fraud or fraudulent
                misrepresentation;
              </p>
              <p className="merchant-terms__list-item-text">
                16.5.4. any liability which cannot be excluded or limited by
                applicable law.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                16.6. You agree to indemnify us and the Card Schemes and APM
                Provider and our respective affiliates, officers, directors,
                employees and agents from any losses, liabilities indemnities of
                any kind (including, without limitation, costs, expenses and
                reasonable legal fees) arising out of any claim, complaint or
                Chargeback:
              </p>
              <p className="merchant-terms__list-item-text">
                16.6.1. made or claimed by a Cardholder or APM User with respect
                to any Transaction or Transaction Data submitted by you;
              </p>
              <p className="merchant-terms__list-item-text">
                16.6.2. caused by your breach of this Agreement or the Card
                Scheme Rules or APM Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                16.6.3. resulting from any voluntary or involuntary bankruptcy
                or insolvency proceedings by or against you.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Force Majeure</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                17.1. Under no circumstances shall we be liable to you for any
                events which are beyond our reasonable control, including but
                not limited to acts of God, war, terrorist activity, sabotage or
                riots, floods, fires, explosions or other catastrophes, hacking
                attacks or hardware breakdowns.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                17.2. Without limiting the generality of clause 17.1, we shall
                not be liable for a failure of any IT system, communication
                system or payment system regardless of whether such failure is
                caused by hardware or software failure. The foregoing shall not
                apply to failures of systems owned by us or that are subject to
                our direct technical control and access if we have failed to
                maintain protective measures against their failure in accordance
                with a business continuity plan in accordance with general
                industry practice and have failed to reasonably mitigate the
                effects of the system failure after its occurrence.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Representation and Warranties
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                18.1. You represent and warrant that:
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.1. if you are a corporate entity, you are validly
                incorporated and lawfully exist under the laws of the
                jurisdiction of incorporation or any country or territory in
                which you conduct business;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.2. your execution of and performance under this Agreement
                in no way breaches, contravenes, violates or in any manner
                conflicts with any legal obligation including, without
                limitation, your corporate charter or similar document or any
                agreement between you and any third party or any affiliated
                entity;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.3. you have obtained and will maintain all necessary
                consents, authorisations, permissions and other facilitating
                acts in order to lawfully perform your obligations under this
                Agreement and the relevant Card Scheme Rules and APM Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.4. you may lawfully conduct your business in any country or
                territory into which you sell, provide, deliver, promote or
                market your goods or services and that you have obtained all
                necessary authorisations, clearances, licences or consents to do
                so;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.5. all information provided by you to us in connection with
                your Application and this Agreement is and remains complete and
                accurate;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.6. the person entering into this Agreement on your behalf
                is duly authorised to do so;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.7. you do not offer and do not intend to offer goods or
                services prohibited under clause 5.11;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.8. you perform your obligations under this Agreement at all
                times in compliance with applicable laws;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.9. you will not use Services for any criminal, illegal, or
                otherwise prohibited use, including (but not limited to)
                activities related to money-laundering, drug trafficking, human
                trafficking, weapon trafficking, terrorism, securities fraud, or
                tax evasion. You represent and warrant that you will not use our
                Services to assist any other party in such illegal activity;
              </p>
              <p className="merchant-terms__list-item-text">
                18.1.10. you will not in any way use Services to: distribute
                spam, junk communications or chain letters; reverse engineer or
                otherwise improperly access any of the System underlying code or
                technical mechanisms; cause damage to us through any means,
                including (but not limited to) through the use of hacking,
                malware, viruses, illegitimate credentials, phishing, brute
                force attacks, SQL exploits, or any other method of
                detrimentally intercepting, interrupting, or damaging any
                information or functionality related to the System. You also
                agree not to transfer access to your Merchant Portal or any
                other rights granted to you by these Terms and conditions.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                18.2. With respect to every Transaction you submit to us, you
                represent and warrant that:
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.1. the Transaction represents a genuine payment or payment
                refund for the bona fide sale or provision of goods or services
                which you sell or provide in the ordinary course of your
                business;
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.2. the Transaction Data is free from any material
                alterations not authorised by the Cardholder;
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.3. you have collected the Transaction Data in accordance
                with this Agreement and applicable Card Scheme Rules or APM
                Rules;
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.4. you are not aware of any facts that would reasonably
                give rise to the suspicion that the Transaction or underlying
                purchase has been made fraudulently or otherwise in an illegal
                manner;
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.5. your underlying payment claim against the Cardholder or
                APM User is not subject to any dispute, set-off or counterclaim
                and you have no reason to believe that a dispute, set-off or
                counterclaim will arise;
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.6. you have not advanced any cash to the Cardholder or APM
                User (except as permitted by the Card Scheme Rules or APM
                Rules);
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.7. any Transaction representing a refund is a refund for a
                Transaction originally processed through us; and
              </p>
              <p className="merchant-terms__list-item-text">
                18.2.8. you do not submit the Transaction on behalf of any third
                party.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Your Information
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                19.1. You authorise us to perform any necessary credit checks
                with respect to you and your directors, officers, affiliates,
                principals and guarantors (if applicable).
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                19.2. You further authorise us to share any information obtained
                through such credit check or provided to us by you with fraud
                prevention agencies for the purpose of mitigating the risk of
                fraud or other illegal activities in connection with the
                processing of your Transactions.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                19.3. Upon our reasonable request, you are required to give such
                further information as may be necessary from time to time in
                order to assess your financial status, creditworthiness, good
                standing, dispute and enforcement history and customer
                complaints processes for the purposes of mitigating risk
                exposure in connection with the processing of your Transactions.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                19.4. You shall inform us immediately of:
              </p>
              <p className="merchant-terms__list-item-text">
                19.4.1. any change to any information you submit to us in your
                Application or otherwise in connection with us entering into
                this Agreement; In case of change of legal entity's directors or
                shareholders, the appropriate documents should be submitted to
                us in 3 (three) business days after changes come into force.
              </p>
              <p className="merchant-terms__list-item-text">
                19.4.2. any adverse change in your financial status,
                creditworthiness or ability to meet your obligations under this
                Agreement or towards any of your creditors;
              </p>
              <p className="merchant-terms__list-item-text">
                19.4.3. any investigation into your affairs by any court or
                government authority; or
              </p>
              <p className="merchant-terms__list-item-text">
                19.4.4. any change in your circumstances that may have a
                material adverse effect on your ability to perform your
                obligations under this Agreement.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Data Protection</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                20.1. Each party, when acting as data processor (as defined in
                the Federal Decree Law No. 45 of 2021 Regarding the Protection
                of Personal Data, Data Protection Laws of UAE, Federal Law No.
                15 of 2020 on Consumer Protection and other laws), shall process
                personal data in accordance with applicable data protection
                laws.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                20.2. Where one party acts as the data processor, it shall at
                all times follow the Data Controller’s reasonable instructions
                with regards to the personal data processed.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                20.3. You shall at all times ensure that you have obtained from
                the Cardholder or APM User all necessary consents with regards
                to the processing of the Cardholder's or APM User’s personal
                data including, but not limited to, the right to share relevant
                personal data with us, the Card Schemes, the Card Issuer, the
                APM Provider and any other third party involved in the
                processing of your Transactions and the right to process such
                personal data in jurisdictions outside the European Economic
                Area. In any event, if you proceed, such consent shall be
                assumed existing and any claim regarding data protection, upon
                your failure to obtain such consent shall burden you, solely.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Suspension of Service
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                21.1. We may at any time suspend the provision of services to
                you:
              </p>
              <p className="merchant-terms__list-item-text">
                21.1.1. if any circumstances occur or are likely to occur that
                would give us the right to terminate or otherwise end this
                Agreement;
              </p>
              <p className="merchant-terms__list-item-text">
                21.1.2. you have a negative Merchant Payment Account Balance on
                any of your Merchant Payment Accounts; or
              </p>
              <p className="merchant-terms__list-item-text">
                21.1.3. you are in breach of this Agreement or the Card Scheme
                Rules or APM Rules; or
              </p>
              <p className="merchant-terms__list-item-text">
                21.1.4. the signed Agreement as original document is not
                provided within one month from the date of signing to us.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                21.2. Any suspension of the service shall be notified to you in
                advance or, if this is not reasonably possible, as soon as
                possible after suspending the service.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                21.3. If we suspend services to you, you shall be obliged to
                continue to pay any recurring fees, minimum fees and other fees
                that are charged on a continuing basis.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                21.4. We shall endeavour to lift a suspension as soon as the
                reasons for its imposition cease to exist and are not likely to
                reoccur within a time period reasonably determined by us.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Termination</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                22.1. Subject to any agreed minimum term, you may terminate this
                Agreement at any time without reason by written notice to us.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                22.2. Subject to any agreed minimum term, we may terminate this
                Agreement at any time without reason by written notice to you.
                Such termination shall be effective 30 (thirty) days after you
                have received the termination notice.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                22.3. Regardless of any agreed minimum term, we may terminate
                this Agreement by written notice to you at any time immediately
                or with such notice period as specified by us in the termination
                notice:
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.1. you become unable to pay your debts;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.2. you cease or threaten to cease to carry on the whole or
                a substantial part of your business;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.3. any distress or execution is levied on your property or
                assets;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.4. you make any voluntary arrangement or composition with
                your creditors;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.5. you or your shareholders or principals pass any
                resolution to wind up (other than for the purpose of a bona fide
                reconstruction or amalgamation without insolvency) or an order
                is made for your winding up;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.6. you are the subject of a notice of intention to appoint
                an administrator or of a notice to appoint an administrator or
                you are the subject of an administration application, become
                subject to an administration order or have an administrator
                appointed over you;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.7. a receiver or administrative receiver is appointed over
                all or any of your property or assets;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.8. you make an application for a debt relief order or a
                debt relief order is made in relation to you;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.9. you are dissolved or otherwise cease to exist; or
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.10. the equivalent of any of the events described in
                clauses 22.3.1 to 22.3.9 occurs in relation to you under the
                laws of any jurisdiction;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.11. if you are undergoing or intend to undergo a material
                change of your ownership structure; a change is material if it
                affects the ownership structure you have notified to us in your
                Application or subsequent information update;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.12. you are in material breach of this Agreement;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.13. you are otherwise in breach of this Agreement and
                failed to remedy such breach within 10 business days of our
                notice to you that you are in breach of this Agreement;
              </p>
              <p className="merchant-terms__list-item-text">
                22.3.14. reputational risk concerning your business activities
                occurred;
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                22.4. For the purpose of clause 22.3.12, but without limiting
                the generality of its application, a material breach shall be
                deemed to exist if:
              </p>
              <p className="merchant-terms__list-item-text">
                22.4.1. you are in breach of any representation or warranty
                given in clause 18 or otherwise;
              </p>
              <p className="merchant-terms__list-item-text">
                22.4.2. you fail to provide us with any required security under
                clause 11;
              </p>
              <p className="merchant-terms__list-item-text">
                22.4.3. you are in breach of any Card Scheme Rules and such
                breach may result in the imposition of a fine or penalty or may
                adversely affect our standing with any Card Scheme;
              </p>
              <p className="merchant-terms__list-item-text">
                22.4.4. you are in repeated breach of this Agreement or any Card
                Scheme Rule; or
              </p>
              <p className="merchant-terms__list-item-text">
                22.4.5. you are in breach of any applicable law.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Change of Terms and Conditions
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.1. This Agreement is subject to change from time to time.
                Changes may be made by notice from us to you under the following
                procedure:
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.2. We shall give you notice of any proposed change to this
                Agreement (a “Change Notice“).
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.3. The proposed change shall come into effect automatically
                two weeks after receipt of the Change Notice unless you give
                written notice to us that you object to the proposed changes, in
                which case we shall treat your objection as a termination notice
                terminating this Agreement on the date the changes would have
                come into effect.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.4. We may stipulate in a Change Notice a different time
                period for the coming into effect of any change provided. Such
                time period cannot go beyond the time period specified in
                p.23.3.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.5. If no objection notice is received by us within the
                stipulated time frame, you are deemed to have accepted the
                change.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                23.6. You have the right to terminate this Agreement with
                immediate effect at any time before the change becomes
                effective.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Taxes</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                24.1. It is your responsibility to determine which, if any,
                taxes apply to any payments received by you for any Transaction
                and to report and remit the correct tax to the appropriate tax
                authority. We are not obliged to determine whether taxes apply
                and are not responsible to collect, report or remit any taxes
                arising from any Transaction.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                24.2. The provision of financial services in the European Union
                is currently exempt from Value Added Tax (“VAT”). Should VAT
                become chargeable on any of our services, we shall be entitled
                to charge VAT in addition to the fees for these chargeable
                services.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                24.3. Where our services do not constitute VAT exempt services,
                the fees quoted in this Agreement are exclusive of VAT and VAT
                shall be charged in addition to such fees.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Confidentiality</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                25.1. During the term of this Agreement and thereafter each
                party shall use and reproduce the other party’s Confidential
                Information only for purposes of this Agreement and only to the
                extent necessary for such purpose and will restrict disclosure
                of the other party’s Confidential Information to its employees,
                consultants or independent contractors with a need to know and
                will not disclose such Confidential Information to any third
                party without the prior written approval of the other party.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                25.2. Notwithstanding the foregoing, it will not be a breach of
                this Agreement for either party to disclose Confidential
                Information of the other party if required to do so under law or
                by order of a competent court or government authority.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                25.3. No confidentiality obligations shall apply to information
                that (i) is or becomes public knowledge through no action of the
                other party; (ii) is known to the receiving party without
                restriction prior to receipt; (iii) is received from a third
                party having a legal right to disclose it; or (iv) is
                independently developed by the receiving party’s employees or
                agents without access to the Confidential Information.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Assignment, Third Party Rights
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                26.1. You may not assign any of your rights under this Agreement
                to a third party without our prior written consent.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                26.2. No person who is not a party to this Agreement shall have
                rights under or otherwise to enforce any term of this Agreement.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Relationship of the Parties
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                You and we are independent contractors under this Agreement and
                nothing herein will be construed to create a partnership, joint
                venture or agency relationship between us.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Non-solicitation of Employees
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                You undertake that you will not for the term of this Agreement
                and for a period of six months thereafter on your own behalf or
                on behalf of any third party directly or indirectly solicit or
                endeavour to entice away from us any person who has at any time
                during the term of this Agreement been employed or engaged by
                us.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Notices</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                29.1. Any notice to be given under or in connection with this
                Agreement must be given in writing and delivered by hand or sent
                by first class prepaid post or recognised courier service to the
                designated address. Such notice shall be deemed received on the
                business day following posting.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                29.2. Any notice by e-mail shall be deemed given in writing and
                properly delivered if addressed to the designated e-mail
                address. It shall be deemed received on the business day
                following the day it was sent.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                29.3. The parties agree to conduct all communication in English
                (as preferred) or Arabic.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Waiver</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                Any waiver of a right under this Agreement shall only be
                effective if declared in writing. Delay or failure to exercise a
                right shall not constitute a waiver nor prevent future exercise.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Severability</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                If any part of this Agreement is found to be invalid, unlawful
                or unenforceable, such part shall be severed and the remainder
                shall continue in full force and effect.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Applicable Law</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                This Agreement shall be governed by and interpreted in
                accordance with the laws of the United Arab Emirates. Any
                dispute shall be brought exclusively in the courts of the UAE.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">License</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                We grant you a limited, nonexclusive, non-transferable,
                revocable license (“License”) to access and use our Services.
                This License is subject to these Terms. Any use not expressly
                permitted is prohibited. All rights remain reserved by us and
                our licensors. You may not redistribute, reverse engineer,
                alter, claim ownership of, or otherwise exploit any content or
                functionality without our prior written consent.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">
              Entire Agreement
            </h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                This Agreement, including all Schedules and referenced
                documents, represents the entire agreement between the parties.
                Each party acknowledges entering into it solely on the
                representations and terms contained herein.
              </p>
            </div>
          </li>
          <li className="merchant-terms__list-item">
            <h3 className="merchant-terms__list-item-title">Complaints</h3>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                35.1. Any complaints about us or the services should be
                addressed to support@glidy.pro. Indicate clearly that you are
                submitting a complaint. You may request our complaints procedure
                at any time.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                35.2. We endeavour to provide an answer or resolution within the
                timeframes required by applicable legislation. If this is not
                possible due to unforeseen circumstances, we will contact you.
              </p>
            </div>

            <div className="merchant-terms__list-item-inner">
              <p className="merchant-terms__list-item-text">
                35.3. If your complaint is not resolved to your satisfaction,
                you may contact www.sanadak.gov.ae. The Financial Ombudsman of
                the UAE may refuse to hear your complaint if you are not an
                eligible complainant.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default MerchantTerms
