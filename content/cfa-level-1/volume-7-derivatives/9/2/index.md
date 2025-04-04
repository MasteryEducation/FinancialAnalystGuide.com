---
title: "Valuing Interest Rate Swaps and Swap Rates"
description: "Explore the essential mechanics for valuing interest rate swaps, including fixed and floating leg methodologies, calculating swap rates, and understanding day count conventions."
linkTitle: "9.2 Valuing Interest Rate Swaps and Swap Rates"
date: 2025-03-21
type: docs
nav_weight: 9200
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Overview

Interest rate swaps are at the heart of the global derivatives market, used by corporations, financial institutions, and investors to manage interest rate risk, fine-tune cash flows, or speculate on interest rate moves. At their core, interest rate swaps allow two parties to exchange payment obligations, typically exchanging a fixed interest payment for a floating one (or vice versa) on the same notional principal. 

Maybe you’ve heard stories about how large companies lock in a fixed rate on their debt to achieve more predictable financing costs. Well, an interest rate swap is exactly the kind of tool that helps make that possible. In this section, we’re diving deep into how these swaps are valued once they’re in play and why the concept of a “swap rate” is so crucial.

## Basic Structure of an Interest Rate Swap

An interest rate swap usually consists of:

- A fixed leg: Pays a fixed rate (the “swap rate”) multiplied by a notional amount.  
- A floating leg: Pays a variable rate (often a reference rate like LIBOR, SOFR, or EURIBOR) multiplied by the same notional.  

Even though it’s called a “swap,” neither side exchanges the notional principal (in standard vanilla interest rate swaps). What actually moves between the parties are the periodic interest payments. 

In a typical plain-vanilla interest rate swap:  
• The fixed rate is determined at the start to make the fair value of the swap zero at inception.  
• The floating rate resets periodically, which often makes its value “par” (or very close to it) right after each reset date.  

Below is a simplified diagram of a generic fixed-for-floating interest rate swap:

```mermaid
flowchart LR
    A["Fixed Rate Payer"] -- Pays Fixed Rate --> B["Swap Counterparty"]
    A -- Receives Floating Rate <-- B
    A -- Notional Remains Unexchanged -- B
```

## The Swap Rate

When we say “swap rate,” we mean the fixed interest rate that sets the initial value of the swap to zero. Think of it like the magic number that ensures neither side has a cost advantage at the start. If you’re paying this fixed swap rate, you’re essentially agreeing to a fair deal that balances out the expected floating payments over time.

What’s cool is that the swap rate isn’t plucked out of thin air. It’s usually inferred from the market—particularly from observed yield curves on government bonds, reference rates on floating instruments, and the current supply-demand dynamics for interest-rate exposure.  

For example, if the 3-month floating rate is projected to hover around 2.5%–3.0% over the next few years, the fixed swap rate will reflect that anticipation. It might be set around the average expected floating rate, adjusted for any credit or liquidity premiums embedded in the swap market.

## Valuing the Swap at Initiation

To set the stage, let’s consider how we value an interest rate swap on Day One. Because neither party wants to pay an upfront premium, the present value (PV) of the fixed leg must equal the PV of the floating leg. When these two match perfectly, the swap’s initial value is zero for both sides—meaning it’s a fair transaction.

### Calculating the Fixed Leg’s Value

Imagine you’re paying a fixed rate \\( r_\text{fixed} \\) on a notional \\( N \\). The fixed leg typically makes periodic payments based on:

{{< katex >}}
\text{Payment}_\text{fixed} = N \times r_\text{fixed} \times \tau
{{< /katex >}}

where \\( \tau \\) is the fraction of the year based on the swap’s day count convention (e.g., 30/360, Actual/365, or Actual/360). If the payments occur at times \\( t_1, t_2, ..., t_n \\), the present value of the fixed leg can be approximated as:

{{< katex >}}
V_\text{fixed} = \sum_{i=1}^{n} \Bigl(N \times r_\text{fixed} \times \tau_i \times DF(t_i)\Bigr) + \Bigl(N \times DF(t_n)\Bigr)
{{< /katex >}}

Here, \\( DF(t_i) \\) is the discount factor for time \\( t_i \\). Notice we also add the notional \\( N \\) discounted back at \\( t_n \\) if there is any principal exchange at maturity (or if it’s structured like a bond). In most vanilla interest rate swaps, the notional is not exchanged, but in some theoretical valuations, we can interpret the last discounted notional to reflect the final flow if the swap structure includes a final principal exchange.

### Calculating the Floating Leg’s Value

For the floating leg, the payments are typically:

{{< katex >}}
\text{Payment}_\text{floating} = N \times (r_\text{floating} + \text{spread}) \times \tau
{{< /katex >}}

If the floating rate “resets” at the start of each payment period to match current market rates, the floating leg’s value right after a reset date often reverts to par (or the notional \\( N \\)) because you’re essentially receiving (or paying) the market rate. Thanks to this par floater feature, the floating leg is commonly valued at (or near) the notional at reset.

Thus, at initiation (right after a rate reset), the present value of the floating leg is often assumed to be equal to \\( N \\) (if there’s no spread). If there’s a spread, or if the next floating payment is mid-accrual, the valuation approach becomes more nuanced. But in a vanilla swap, the concept of “par floater” usually keeps things straightforward at the reset date.

### Ensuring Initial Value = 0

To make the swap worth zero at inception:

{{< katex >}}
V_\text{fixed} = V_\text{floating}
{{< /katex >}}

Solving for the fixed rate that satisfies this equality gives us the “swap rate.” This rate changes constantly in the market as interest rate expectations and yield curves evolve.

## Valuing the Swap After Initiation

Once time passes and market interest rates do their roller-coaster thing, the fixed leg’s value can deviate from the floating leg’s value. If the fixed rate you are paying is higher than the new market swap rates, your swap becomes more valuable to your counterparty (and less valuable to you) because they’re receiving a higher-than-market fixed rate. Conversely, if your fixed rate is lower than the new market swap rates, you’re in a favorable position.

Practically, to figure out the swap’s value at some time \\( t \\) after initiation:

1. **Project the cash flows** on both legs from \\( t \\) onward, using the forward rates implied by the current yield curve.  
2. **Discount those projected cash flows** back to the valuation date with the current discount factors (or zero-coupon yields).  
3. **Net the two present values**: The difference is the swap’s market value from the perspective of one of the parties.

If we label the value of the fixed leg as \\( V_\text{fixed}(t) \\) and the floating leg as \\( V_\text{floating}(t) \\), then:

{{< katex >}}
V_\text{swap}(t) = V_\text{floating}(t) - V_\text{fixed}(t).
{{< /katex >}}

Depending on which side of the swap you hold, this value could be an asset (positive) or a liability (negative).

## Floating Leg Valuation Nuances

The floating leg isn’t always precisely notional value after the reset date. There are small factors such as:

- **Spread Adjustments**: If there’s a spread (e.g., LIBOR + 40 bps) for credit risk or other reasons, the floating leg might not be exactly par.  
- **Accrued Interest**: If you’re valuing mid-period, you need to account for accrued interest on the floating leg.  
- **Day Count Conventions**: Actual/360, Actual/365, or 30/360 can cause small differences in accrued calculations.

But for exam-focused valuations and standard theoretical discussions, par floater assumptions remain a good approximation for the floating side right at or near reset dates.

## Swap Rates and the Market Yield Curve

Swap rates are deeply intertwined with the market’s expectations of future short-term rates, plus any risk premiums. They often trade closely with government yield curves, but the “swap curve” can differ. In reality, the swap curve is a key tool for:

- **Pricing and Hedging**: Many institutions compare the swap curve to Treasury yields (or other government benchmarks) to find potential hedging or arbitrage opportunities.  
- **Benchmarking**: A company might look at the swap rate to gauge the fair fixed rate it can lock in for a certain maturity. If the company can borrow in the market at a rate closely related to the swap rate, it might do a floating+swap arrangement or go straight for a fixed bond—whichever is cheaper or more flexible.

In practice, you’ll hear about “swap spreads,” which is basically the difference between the swap rate for a specific maturity and the yield of a government bond of the same maturity. Swap spreads can widen or narrow due to credit risk, liquidity concerns, or shifting demand for interest-rate hedging.

## Payment Frequency and Day Count Conventions

You’ll see all sorts of variations in interest rate swaps. Some pay semiannually on the fixed leg and quarterly on the floating leg; others pay monthly floating amounts. The day count convention can differ between legs (e.g., 30/360 for fixed payments and Actual/360 for floating). Such details impact:

- How you compute each payment amount.  
- The discounting schedule, since payment frequencies determine timing and day counts.  
- The precise swap valuation, though the conceptual framework remains the same.

Here’s a small table summarizing common conventions:

| Convention      | Typical Usage                     |
|-----------------|-----------------------------------|
| 30/360          | Often used for corporate bonds    |
| Actual/360      | Common in money markets           |
| Actual/365(FIX) | Some UK markets and derivatives   |
| Quarterly       | Often floating leg (LIBOR, SOFR)  |
| Semiannual      | Common for fixed leg in the U.S.  |

Make sure to confirm these details in the final swap documentation (like the ISDA Master Agreement). They might sound trivial, but they can subtly impact the final cash flow calculations.

## Practical Example

Let’s walk through a mini numeric example to bring these concepts to life. (Heads up: This is simplified to keep the math from getting too overwhelming.)

Suppose you enter into a $10 million notional interest rate swap:  
- You pay fixed at 3.00% annually on a 30/360 convention. Payments are made semiannually, but for simplicity, let’s assume one annual payment.  
- You receive a floating rate tied to 1-year LIBOR, currently at 3.00%.  

At initiation, if the market expects the average 1-year LIBOR to be around 3.00% over the swap’s 3-year life, your fixed rate is fair, and the swap value is zero. But picture a few months later, if the yield curve shifts and now the market expects the average 1-year LIBOR to be 4.00% for the next three years, your fixed rate of 3.00% is obviously below what the market’s implying. The floating leg is more valuable now (since it’ll pay more in the future), and your position (as the fixed-rate payer) has lost value.

To figure out by how much you’ve lost, you:  
1. Forecast the 1-year LIBOR for the next 3 resets, say it’s 4.00% each year.  
2. Discount those floating payments.  
3. Discount your fixed payments at 3.00% times notional.  
4. Subtract the fixed leg’s PV from the floating leg’s PV.  

That difference shows how in- or out-of-the-money your swap is.  

## Best Practices and Common Pitfalls

- **Always check day count conventions**. A small slip can cause large discrepancies in the final valuation.  
- **Monitor credit spreads**. The reference rate might come with a spread on the floating side if there’s credit risk.  
- **Lock in discount curves**. Valuation changes dramatically if you use different discount factors for each cash flow. Consistency is key.  
- **Be mindful of the reset dates**. The floating leg’s value can jump at reset if accrued interest or spreads get overlooked.  
- **Confirm final leg details**. Some swaps have a final exchange of notional (especially cross-currency swaps). That can alter your valuation approach.  

## Real-World Anecdote

I once saw a smaller firm that had a plain-vanilla swap (pay 5.50% fixed, receive LIBOR). They set it up years earlier when overnight rates were high. As rates fell, the firm realized their fixed payment was quite steep compared to new market rates. The CFO was initially shocked at how “underwater” the swap was. They eventually negotiated a swap termination with the bank—at a price. This story underscores how vital it is to keep tabs on your swap’s mark-to-market value as rates fluctuate.

## References and Further Reading

- McDonald, Robert L. “Derivatives Markets.” 3rd ed., Pearson.  
- Fabozzi, Frank J. “Fixed Income Analysis.” CFA Institute Investment Series.  
- ISDA 2006 Definitions:  
  https://www.isda.org/book/isda-2006-definitions  

-------------

## Test Your Knowledge: Interest Rate Swap Valuation Quiz

{{< quizdown >}}

### If the floating rate on a plain-vanilla interest rate swap resets to the current market rate at the beginning of each period, the value of the floating leg:
- [ ] Is always zero.
- [ ] Only equals the notional principal at inception.
- [x] Is approximately the notional principal right after each reset.
- [ ] Is equal to the notional principal on any day.

> **Explanation:** A reset to the current market rate reverts the floating leg’s value close to par (the notional). However, it is not always zero or equal to the notional on every day—just typically right after each reset.

### Which of the following describes the “swap rate” in a plain-vanilla interest rate swap?
- [ ] The after-tax rate that sets the floating leg to notional principal.
- [x] The fixed rate that makes the swap’s initial market value zero.
- [ ] The average of the floating rates the swap will pay over its entire life.
- [ ] The fixed rate that guarantees a spread for the floating-rate receiver.

> **Explanation:** The swap rate is determined so that the fixed leg’s value equals the floating leg’s value at initiation, making the swap start with a net market value of zero.

### When valuing a swap after initiation, the floating leg’s projected payments should be:
- [ ] Based on the initially agreed floating rate.
- [ ] Ignored because the floating leg is always worth par.
- [ ] Discounted only if it has a spread above the reference rate.
- [x] Estimated using forward rates implied by the current yield curve.

> **Explanation:** You must project the floating leg’s future cash flows using the forward rates implied by the current market. These cash flows are then discounted to arrive at their present value.

### The difference between the value of the fixed leg and the floating leg of a swap represents:
- [ ] The accrued interest on the notional.
- [x] The swap’s market value to the fixed-rate payer or receiver.
- [ ] The rate that equates the bond yield to the swap yield.
- [ ] The settlement cost at each reset date.

> **Explanation:** After initiation, the swap value is determined by netting the present values of each leg’s projected payments.

### A swap with semiannual fixed payments and quarterly floating payments will require:
- [x] Separate discounting schedules for each leg.
- [ ] The same day count convention for both legs.
- [x] Different forecasting periods for each leg.
- [ ] A balloon payment of interest at the end of the swap.

> **Explanation:** Semiannual vs. quarterly payouts mean that each leg has its own payment frequency, potentially with differing day count conventions and separate discount curves for each timeline.  

### Which factor would most likely increase the “swap rate” on a plain-vanilla interest rate swap?
- [x] A rise in expected future short-term rates.
- [ ] A decline in floating rate volatilities.
- [ ] A decrease in notional principal.
- [ ] A narrower bid-ask spread in the interbank market.

> **Explanation:** An upward shift in expected future rates raises the fixed leg needed to keep the swap fairly priced at initiation.

### What is one major difference between the fixed leg and a standard fixed-rate bond, despite both paying a fixed coupon?
- [x] The swap’s floating rate side resets, affecting overall valuation, whereas a bond’s coupon is fixed unconditionally.
- [ ] Bonds always have a notional exchange at maturity, while swaps never do.
- [x] The swap’s notional is typically not exchanged, but a bond’s principal is typically repaid.
- [ ] There is no difference; the fixed leg is just like owning a bond.

> **Explanation:** The swap’s fixed leg behaves similarly to a bond in some respects, but the presence of a floating leg and the lack of principal exchange in most swaps make them fundamentally different instruments.  

### In the context of interest rate swaps, the term “par floater” refers to:
- [ ] A floating rate instrument with a large credit spread included.
- [ ] A swap that only pays interest at maturity.
- [x] A floating rate instrument priced at or near par value at each rate reset.
- [ ] A swap used exclusively for currency exchange.

> **Explanation:** A par floater is a floating-rate note that resets to the prevailing market interest rate, causing it to trade near par each time the rate resets.

### Which of the following can cause the floating leg to deviate from par value after a reset?
- [x] Spread adjustments or changes in the credit environment.
- [ ] The floating leg can never deviate from the notional.
- [ ] Day count convention on the fixed leg.
- [ ] Annual payments instead of quarterly payments.

> **Explanation:** Although theoretically the floating leg is near par, spreads or sudden changes in credit risk can shift its value away from par.

### True or False: The presence of a spread on the floating leg complicates the valuation, because you must consider the spread in discounting future cash flows.
- [x] True
- [ ] False

> **Explanation:** If there’s a spread paid or received on the floating leg, you need to incorporate that spread into the projected cash flows (and discount them appropriately), making the overall valuation more complex.

{{< /quizdown >}}


---

**Final Exam Tips:**  
• You’ll likely see scenario-based questions comparing swap valuation at initiation vs. midlife. Practice discounting both fixed and floating leg cash flows separately.  
• Be comfortable with the par floater concept. It’s a foundational shortcut for valuing floating legs.  
• Keep an eye on day count, payment conventions, and any spreads—these details can change the final result.  
• For constructed-response questions, show each computational step clearly and explain the logic.  

**Concise Reference List**  
• McDonald, Robert L. “Derivatives Markets.” 3rd ed., Pearson.  
• Fabozzi, Frank J. “Fixed Income Analysis.” CFA Institute Investment Series.  
• ISDA 2006 Definitions: https://www.isda.org/book/isda-2006-definitions  

Stay thorough in your practice, and remember that beyond the formulas, understanding the economic intuition and mechanics behind swaps is the key to conquering swap-pricing questions on the exam. Good luck!
