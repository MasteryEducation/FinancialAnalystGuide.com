---
title: "Practice Vignette: Constructing Arbitrage-Free Prices"
description: "Learn how to derive missing spot rates, discount factors, and consistent bond prices using no-arbitrage principles. This practice vignette guides you step by step through the bootstrapping process while highlighting potential pitfalls, transaction costs, and real-world complexities."
linkTitle: "7.4 Practice Vignette: Constructing Arbitrage-Free Prices"
date: 2025-03-21
type: docs
nav_weight: 7400
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-9-portfolio-management"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

So, you’ve made it this far in your exploration of the arbitrage-free valuation framework. By now, you probably know a bit about discount curves, spot rates, forward rates, and the Law of One Price. But how do we put those ideas into practice when we’re given a messy market with (sometimes) missing data, mispriced bonds, and the possibility of arbitrage? That’s exactly what we’ll tackle in this practice vignette. We’ll walk through a hypothetical bond market scenario where some spot rates are known, others are implied, and a few bonds are priced in such a way that might tempt you to exploit an arbitrage opportunity—if you can find it.

If you recall from earlier sections in Chapter 7 (and Chapter 4 on term structure), we rely on the notion that each cash flow can be discounted at a rate appropriate to its maturity. When the bonds’ prices—or their implied yields—aren’t consistent with these spot rates, an arbitrage situation may arise. We’re going to dissect that step by step, fill in missing spot rates, and confirm that all prices are aligned with no-arbitrage logic.

## The Vignette Setup

Imagine we have three annual-pay bonds in the market. Each pays coupons once per year, and each has the same maturity date for its final payment. The following data are posted in the market:

1. A short-term zero-coupon bond (Bond Z) maturing in 1 year, priced at 97.00.  
2. A 2-year coupon bond (Bond A) with a 4.0% annual coupon, priced at 98.50.  
3. A 2-year coupon bond (Bond B) with a 5.0% annual coupon, priced at 100.50.

Separately, we know the 1-year spot rate r₁ is 3.15% (annual, on a bond-equivalent basis). However, we do not know the 2-year spot rate r₂. We might also want to check the implied forward rate for year 2—something we should do after we pin down r₂.

Some interesting wrinkles:

• Bond Z trades slightly below its theoretical price if we strictly used the posted 1-year spot rate.  
• The 2-year coupon bond (Bond A) is at a discount (below par), suggesting a yield above its coupon rate.  
• Bond B, on the other hand, is trading at a premium (above par).  

One might suspect there’s a subtle inconsistency or mispricing here—particularly if we can’t get the same 2-year discount factor from Bond A and Bond B. Let’s see.

## Step-by-Step Approach

### Identify the Coupon Payment Structure

Before diving into spot rates, let’s write down the expected cash flows for each bond. Assume each bond has a par (face) value of 100.

• Bond Z (zero-coupon, 1-year maturity):  
  - End of Year 1: Receives 100 (principal only, no coupons).  
  - Price is 97.00.  

• Bond A (4.0% coupon, 2-year maturity):  
  - End of Year 1: 4.00 coupon  
  - End of Year 2: 4.00 coupon + 100 principal = 104.00  
  - Price is 98.50.  

• Bond B (5.0% coupon, 2-year maturity):  
  - End of Year 1: 5.00 coupon  
  - End of Year 2: 5.00 coupon + 100 principal = 105.00  
  - Price is 100.50.  

### Calculate Discount Factors from Available Spot Rates

First, let’s confirm the discount factor for Year 1, using the posted spot rate r₁ = 3.15%. Typically, the clean approach is:

(1)  d₁ = 1 / (1 + r₁)

But, let’s see if the market price of Bond Z (our zero-coupon) aligns with that.

• The theoretical price of Bond Z, using r₁ = 3.15%, would be:  
  Price(Z) = 100 / (1 + 0.0315) = 96.90 (approximately).

Check: The actual market price given is 97.00. That’s slightly above 96.90, so there’s a mild difference (maybe a small premium of 0.10). Not a massive discrepancy, but it’s a sign that real markets can have fractional misalignments. For the purpose of no-arbitrage bootstrapping, we might proceed with the posted r₁ = 3.15% or re-derive an implied r₁ from 97.00. (We’ll keep 3.15% but just note the discrepancy.)

So we set:

(2)  d₁ = 1 / (1 + 0.0315) ≈ 0.9689

### Solve for Missing Spot Rate

Now, let’s look at Bond A. In a perfect no-arbitrage world, we can express its price as the present value of its cash flows discounted at the relevant spot rates.

• Payment in Year 1: 4.00 discounted at d₁  
• Payment in Year 2: 104.00 discounted at d₂ (the 2-year discount factor)

Bond A’s price must equal 98.50, so:

(3)  98.50 = 4.00 × d₁ + 104.00 × d₂

But we know d₁ from above (0.9689). So:

(4)  98.50 = (4.00 × 0.9689) + 104.00 × d₂  
     98.50 = 3.8756 + 104.00 × d₂  
     98.50 – 3.8756 = 104.00 × d₂  
     94.6244 = 104.00 × d₂  
     d₂ = 94.6244 / 104.00 ≈ 0.9100

So the discount factor d₂ for Year 2 is approximately 0.9100. If you want the 2-year spot rate r₂, that’s simply:

(5)  d₂ = 1 / (1 + r₂)²

Thus:

(6)  0.9100 = 1 / (1 + r₂)²

(7)  (1 + r₂)² = 1 / 0.9100 = 1.0989  
(8)  1 + r₂ = √(1.0989) = 1.0485 (approximately)  
(9)  r₂ = 0.0485 = 4.85%

So from Bond A, we get a 2-year spot rate of about 4.85%. However, let’s check if Bond B (5.0% coupon) is consistent with that.

### Re-Price Other Bonds with the Newly Found Discount Factors

Now turn to Bond B. If r₂ = 4.85%, the theoretical price of Bond B should be:

(10)  Price(B) = 5.00 × d₁ + 105.00 × d₂

We already have d₁ = 0.9689 and d₂ = 0.9100. So:

(11)  Price(B) = 5.00 × 0.9689 + 105.00 × 0.9100  
               = 4.8445 + 95.55  
               = 100.3945 (approximately)

Compare that with the actual price of Bond B, which is 100.50. We’re seeing another small discrepancy, but again, it’s pretty close (off by about 0.11 or so). This slight mismatch could be due to real-world factors like transaction costs, bid-ask spreads, or small sample rounding. But from a purely theoretical no-arbitrage perspective, we’re only off by about 0.10 or 0.11. That’s usually within an acceptable margin for exam calculations.

If we wanted to be extremely precise, we could juggle the data to make them line up perfectly. But in a real exam scenario, we’d interpret that Bond A’s implied 2-year spot rate of 4.85% is likely “close enough” to confirm no major arbitrage.

### Confirm No-Arbitrage

Now let’s ensure that the forward rates implied by these spot rates make sense. The 1-year forward rate for the second year, f(1,2), should satisfy:

(12)  (1 + r₂)² = (1 + r₁) × (1 + f(1,2))

We can solve for f(1,2):

(13)  f(1,2) = (1 + r₂)² / (1 + r₁) – 1

Plugging in r₂ = 4.85% and r₁ = 3.15%:

(14)  f(1,2) = (1.0485)² / (1.0315) – 1  
             = 1.0996 / 1.0315 – 1  
             = 1.0660 – 1  
             = 0.0660 = 6.60%

A forward rate of about 6.60% for the second year might suggest that the market expects rates to rise in that period. If the forward rate were drastically different, that might signal an arbitrage if, say, a forward contract or a 2-year bond strategy had an obvious profit route. So far, we see a forward rate that’s plausible, though it’s quite a jump from 3.15% to 6.60%—which is not unheard of if the yield curve is upward sloping. Of course, in real markets, you’d confirm this with actual forward market quotes as well.

At this point, if any bond’s implied forward rate or spot rate drastically contradicted these relationships, you’d suspect an arbitrage. In practice, you’d buy undervalued securities and short overvalued ones (or replicate them via derivatives) to lock in a riskless profit. But the minor differences here (0.10 or 0.11 discrepancy in bond prices) might be wiped out by transaction costs.

## Potential Pitfalls and Arbitrage Opportunities

Bond markets rarely present big glaring mispricings for large volumes. If you do spot them, chances are they’ll be overshadowed by:

• Transaction costs (brokerage, bid-offer spreads)  
• Collateral or margin requirements for short-selling  
• Real-world constraints on shorting certain instruments  

One question to ask when you see a mismatch is: “Is the difference large enough to yield a real arbitrage after fees?” Because if you net out all the friction, you might find that what appears to be a money machine is actually unprofitable. So, while you might get excited if you see a few pennies difference in bond valuations, keep in mind that in reality, exploiting that difference might not be enough to cover all the friction involved.

Another issue is credit risk. If each bond has a slightly different credit profile, lumps in liquidity, or is subject to different contractual conditions, they might not be perfect substitutes for each other—so we can’t treat them as purely identical from a risk perspective.

## The Role of Transaction Costs

Without transaction costs, the mathematics is crystal clear: each bond’s price in the market must be consistent with the present values of its coupons and principal, discounted by the spot rates. If not, a riskless profit is possible.

But transaction costs muddy the picture. Even if you do spot a theoretical arbitrage, some chunk of your profit will be eaten up by commissions, bid-ask spreads, or slippage. You might also have to put up collateral against short positions, which has an associated opportunity cost. Hence, what looks like a sure bet in a frictionless textbook example can vanish under real-world conditions.

## Real-World Complexity

In reality, you’d perform the same steps we just did, but you’d probably have a more extensive set of bonds (with different maturities, coupon structures, or embedded options). You’d likely use a computer to calibrate an entire yield curve—often using an iterative technique that collectively adjusts all the discount factors so that the sum of squared pricing errors is minimized. That’s a fancier version of the same principle: *no-arbitrage consistency across the entire curve.*

You might also incorporate smoothing or interpolation methods (if you have a missing maturity point), or advanced curve-fitting routines (like the Nelson-Siegel model). But in the end, the same universal theme stands: you can’t have a bond be systematically cheaper or more expensive than the portfolio of zero-coupon (or riskless) instruments that replicate it.

## Conclusion

Constructing arbitrage-free prices is one of those “bread-and-butter” exercises for fixed income analysts. You start with whatever yields or spot rates are known, then carefully bootstrap the missing pieces using real market bond prices. As soon as there’s an inconsistency, you have to decide if it’s big enough to exploit. Often, the final “aha” moment is that actual markets never fully align, but the slight differences are generally too small to yield a true no-risk profit. Still, the no-arbitrage framework is your guiding star for setting up fair values and interpreting forward-looking rates.

Keep practicing these calculations. Don’t let the small arithmetic bits confuse you—especially under time pressure in an exam setting. Once you get the hang of plugging in known discount factors, solving for unknown ones, and re-pricing each bond, it becomes second nature.

---

## Glossary

• **Vignette**: A scenario-based question set in the CFA exam that merges multiple concepts into one storyline.  
• **Bootstrapping**: Iterative method to derive sequential spot rates from coupon bond prices.  
• **Discount Factor Consistency**: Ensuring all derived discount factors match observed market prices for each maturity.  
• **Arbitrage Check**: Comparing the cost/value of a security to that of a replicating portfolio of simpler instruments to see if any free-lunch profit exists.  
• **Premium/Discount Bond**: A bond priced above or below par value, reflecting coupon rate differences relative to market yields.

---

## References

• CFA Program Curriculum (2025), Level II, “Fixed Income,” especially the sections on No-Arbitrage Bond Pricing.  
• Practitioner articles and working papers from the Federal Reserve (and other central banks) on bond mispricing and yield curve modeling.  
• Online resources like Khan Academy or Coursera for tutorials on bootstrapping yield curves.  
• Previous chapters in this volume on “The Term Structure of Interest Rates” (Chapter 4) for a deeper look at spot, par, and forward rates.

---

## Test Your Mastery of No-Arbitrage Pricing

{{< quizdown >}}

### Which of the following best describes bootstrapping in the context of arbitrage-free bond pricing?

- [x] An iterative process of solving for unknown spot rates by using known market bond prices.  
- [ ] A method of interpolating interest rates without reference to bond prices.  
- [ ] A technique for detecting credit risk in bonds with different maturities.  
- [ ] Calculating the bond’s coupon payment based on implied forward rates only.  

> **Explanation:** Bootstrapping uses known bond prices (and any known spot rates) to solve for unknown spot rates in sequence.  


### In a hypothetical market with no transaction costs, what happens if a bond’s market price is strictly lower than the sum of its discounted cash flows?

- [x] There is a theoretical arbitrage opportunity.  
- [ ] The bond must be non-investment grade.  
- [ ] The yield curve must be flat.  
- [ ] The bond’s coupon rate is necessarily higher than its yield.  

> **Explanation:** If the bond’s price is lower than the present value of its future cash flows, an arbitrageur can buy the bond and earn a riskless profit by replicating it with zero-coupon bonds and profiting from the mispricing.  


### Suppose you have a 1-year spot rate of 2.00% and a 2-year spot rate of 4.00%. Using these, you compute a 1-year forward rate for the second year. Which of the following is closest to that forward rate?

- [ ] 2.00%  
- [ ] 4.00%  
- [ ] 6.00%  
- [x] 6.04%  

> **Explanation:** The relationship is (1+r₂)² = (1+r₁)(1+f) ⇒ (1+0.04)² = (1+0.02)(1+f). Solving for f yields ≈ 6.04%.  


### You notice Bond A and Bond B, both maturing in 2 years, have slightly different discount factors implied by their prices. What’s the most likely cause?

- [ ] One bond has embedded options.  
- [ ] The coupon rates differ by more than 2%.  
- [x] Market frictions or minor data noise cause small mismatches.  
- [ ] The yield curve is inverted.  

> **Explanation:** In practice, small differences in coupon rates and pricing can create slight discrepancies in implied discount factors, often attributed to transaction costs, rounding, or differing liquidity.  


### If the computed price of a 2-year bond using a bootstrapped yield curve exceeds its actual market price, which of the following statements is correct?

- [x] The bond might be relatively cheap, implying a potential arbitrage.  
- [ ] The bond’s coupon is necessarily below the spot rate.  
- [ ] The bond has no credit risk.  
- [ ] The discount factors must be systematically overstated.  

> **Explanation:** If the theoretical price (based on no-arbitrage discounting) is higher than the quoted price, the bond might be undervalued and could present an arbitrage opportunity.  


### Which of the following is a valid reason for minor discrepancies between theoretical no-arbitrage prices and actual market prices?

- [ ] Incorrect coupon calculations by the issuer.  
- [x] Transaction costs and bid-ask spreads.  
- [ ] Yield curve must be flat to avoid discrepancies.  
- [ ] There are no valid reasons; real markets always match theory.  

> **Explanation:** Transaction costs, bid-ask spreads, and other microstructure issues can lead to minor misalignments between theoretical models and real prices.  


### How can the presence of credit risk influence the arbitrage-free valuation framework?

- [ ] It does not affect discount rates in any way.  
- [ ] It eliminates the possibility of computing forward rates.  
- [x] It introduces risk premiums that require adjusted discount rates.  
- [ ] It leads to negative spot rates for short maturities.  

> **Explanation:** Credit risk means investors demand higher yields (risk premiums), altering the discount rates and often invalidating a simple risk-free bootstrapping approach.  


### A forward rate implied by the spot curve is significantly higher than the quoted forward rate in the market. Which scenario might this suggest?

- [x] A possible arbitrage opportunity by shorting the overpriced forward and buying the spot instruments.  
- [ ] The risk-free curve must be incorrect.  
- [ ] Investors prefer short maturities.  
- [ ] The yield curve is perfectly flat.  

> **Explanation:** If the implied forward rate from the spot curve is out of line with an actual forward quote, it could mean the forward is mispriced, creating an arbitrage.  


### Which step is typically the final confirmation that your spot rates are consistent in a no-arbitrage environment?

- [ ] Summing coupon payments and dividing by par value.  
- [ ] Comparing a bond’s yield to the forward rate alone.  
- [ ] Calculating Macaulay duration.  
- [x] Re-pricing all bonds using the derived discount factors and verifying minimal price errors.  

> **Explanation:** A key test for consistency: Use the spot rates to price each bond. If the calculated prices closely match the market prices, you have an arbitrage-free set of spot rates.  


### True or False: “A tiny discrepancy between theoretical and actual bond prices automatically signals a high-profit arbitrage strategy.”

- [x] True  
- [ ] False  

> **Explanation:** While it indicates some form of mispricing, “tiny” discrepancies in real markets are often eroded by transaction costs, meaning the actual profit from exploiting them may be zero or negative.  

{{< /quizdown >}}
