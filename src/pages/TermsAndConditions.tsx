import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">
        ImpactSOS CIC: Terms and Conditions of Sale
      </h1>
      <p className="italic mb-4">Last updated: 1 January 2025</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">1. About These Terms</h2>
        <p>
          1.1 These terms set out the agreement between you (the customer) and
          us (ImpactSOS CIC) when you purchase products via our website.
        </p>
        <p>
          1.2 Please read them carefully before ordering. By completing a
          purchase, you agree to these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">2. Who We Are</h2>
        <p>
          2.1 We are ImpactSOS CIC, a Community Interest Company registered in
          England and Wales (Company No. 16080399).
          <br />
          Registered address:
          <br />
          Flat 3 Longman House, Mace Street, London, E2 0QT
        </p>
        <p>
          2.2 You can contact us at:{" "}
          <a
            href="mailto:support@impactsos.com"
            className="text-blue-600 underline"
          >
            support@impactsos.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">3. Ordering With Us</h2>
        <p>
          3.1 Orders are confirmed once you receive an order confirmation email
          from us.
        </p>
        <p>
          3.2 If a product is unavailable or there is an error in price or
          description, we may cancel your order and refund you in full.
        </p>
        <p>
          3.3 You are responsible for entering accurate contact and delivery
          information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">4. Product Descriptions</h2>
        <p>
          4.1 We aim to ensure product imagery and descriptions are accurate.
          However, slight variations in colour, finish, and materials may occur.
        </p>
        <p>4.2 Packaging may vary from images shown.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">5. Prices & Payment</h2>
        <p>
          5.1 All prices include VAT (where applicable) and are listed in GBP.
        </p>
        <p>
          5.2 Payments must be made at the time of ordering. We accept Visa,
          Mastercard, and PayPal.
        </p>
        <p>5.3 We reserve the right to correct pricing errors.</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">6. Delivery</h2>
        <p>
          6.1 We ship to UK addresses and select international destinations.
          Delivery charges will be shown at checkout.
        </p>
        <p>
          6.2 We aim to dispatch orders within 5 working days. You will receive
          an estimated delivery timeframe during checkout.
        </p>
        <p>
          6.3 You become responsible for the goods once delivered to your
          address.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">
          7. Returns & Cancellations
        </h2>
        <p>
          7.1 If you change your mind, you can cancel your order within 14 days
          of receiving it.
        </p>
        <p>
          7.2 To return an item, email{" "}
          <a
            href="mailto:support@impactsos.com"
            className="text-blue-600 underline"
          >
            support@impactsos.com
          </a>
          . Items must be unused and returned in their original condition.
        </p>
        <p>
          7.3 You are responsible for return shipping unless the item is faulty
          or incorrect.
        </p>
        <p>
          7.4 Once we receive your return, we will process your refund within 14
          days.
        </p>
        <p>
          7.5 Some products (e.g. digital downloads, personalised items,
          unsealed hygiene items) are non-returnable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">8. Faulty Items</h2>
        <p>
          8.1 If you receive a faulty or incorrect item, contact us at{" "}
          <a
            href="mailto:support@impactsos.com"
            className="text-blue-600 underline"
          >
            support@impactsos.com
          </a>{" "}
          within 7 days of delivery.
        </p>
        <p>
          8.2 We will arrange a replacement, repair, or refund as appropriate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">9. Intellectual Property</h2>
        <p>
          9.1 All content, designs, and artwork are the property of ImpactSOS
          CIC or licensed partners and may not be reproduced without permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">10. Privacy</h2>
        <p>
          10.1 Your data will be processed in accordance with our Privacy
          Policy.
        </p>
        <p>
          10.2 We only use your personal information to fulfil your order,
          provide customer service, and share updates if you opt in.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2">11. Legal</h2>
        <p>11.1 These terms are governed by English law.</p>
        <p>
          11.2 If you live outside of England and Wales, you may bring legal
          proceedings in your local jurisdiction.
        </p>
        <p>
          11.3 If any part of these terms is deemed unlawful or unenforceable,
          the remaining provisions will remain in force.
        </p>
      </section>

      <p className="mt-8 font-medium">
        Thank you for supporting grassroots stories and community action.
      </p>
      <p className="text-sm text-gray-600 mt-2">
        ImpactSOS CIC
        <br />
        <a
          href="mailto:support@impactsos.com"
          className="text-blue-600 underline"
        >
          support@impactsos.com
        </a>
        <br />
        Registered in England & Wales (No. 16080399)
      </p>
    </div>
  );
};

export default TermsAndConditions;
