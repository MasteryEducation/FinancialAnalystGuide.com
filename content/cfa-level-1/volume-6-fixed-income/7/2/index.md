---
title: "Constructing Yield Curves (Treasury, Benchmark)"
description: "Learn how to gather, bootstrap, and smooth treasury yields to form reliable benchmark yield curves for valuation, analysis, and risk management."
linkTitle: "7.2 Constructing Yield Curves (Treasury, Benchmark)"
date: 2025-03-21
type: docs
nav_weight: 7200
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

Well, let me start by admitting: when I first heard the phrase “constructing the yield curve,” I assumed it was some super-secret formula that only a few math geniuses understood. But in reality, it’s more accessible than you might think. A yield curve is basically a snapshot of interest rates (or yields) across different maturities. Treasuries—such as U.S. Treasury Bills, Notes, and Bonds—are often considered the closest thing to a “risk-free” standard, making them the go-to for a benchmark yield curve. The yield curve you see on market data terminals is usually derived by combining market prices (and yields) of multiple treasury issues, then converting them into a smooth function of maturity versus yield.

Yes, this can get technical—particularly when we talk about concepts like bootstrapping zero-coupon rates or using spline interpolation. But it’s also quite intuitive: if you need to figure out how much a six-month investment should yield in a stable market, you typically glance at the six-month T-bill yield. If you’re looking at 30 years, you check out the 30-year Treasury bond. The idea is to fill in all the maturities in between, often with curve-fitting techniques, so that we get one continuous, reliable benchmark.

This section lays out common steps, best practices, and real-world nuances for constructing these yield curves—particularly for Treasuries, but also for other benchmarks like German Bunds or UK Gilts.

## Treasury Yield Curves as Benchmarks

Treasury securities in many countries rank as the most liquid and default-risk-free instruments for respective local markets. In the United States, the yield curve is often constructed from:

• Treasury Bills (T-Bills) for very short maturities (up to one year).  
• Treasury Notes for intermediate maturities (2, 3, 5, 7, and 10 years).  
• Treasury Bonds for long maturities (20, 30 years).  

In some regions, you might encounter variations (e.g., Europe’s “risk-free” rates may come from German Bunds, while the UK typically uses Gilts). Regardless, the process of turning discrete yield quotes into a continuous curve is essentially the same.

Market participants rely on this “risk-free” curve for:  
• Fair valuation of bonds and derivatives,  
• Setting discount rates for corporate projects,  
• Evaluating portfolio interest rate risk,  
• Benchmarking performance against an agreed-upon yardstick.  

I recall working at a fixed-income desk where we regularly checked intraday treasury yields to see if there were any anomalies. These anomalies—like an on-the-run bond trading at a notably different yield from its off-the-run predecessor—would offer tiny arbitrage opportunities or serve as signals for liquidity constraints. Those moments taught me how important it is to have a consistently derived, up-to-date yield curve.

## Data Collection for Curve Construction

Gathering accurate and timely data is often the first stumbling block. If you’re constructing the U.S. Treasury yield curve, you’ll want to collect:

• On-the-run (OTR) Treasury quotes: The most recently issued T-bill, note, or bond for each major maturity. OTR Treasuries trade with the greatest liquidity, but can occasionally price at a premium (and thus show a slightly lower yield) compared to older “off-the-run” issues.  
• Off-the-run Treasury quotes: These are previously issued securities that are still outstanding but less actively traded. Their yields can sometimes be higher due to slightly lower liquidity.  
• Interpolated yields: Maturities that aren’t directly observed (like 9-month or 15-year tenors) need to be estimated through interpolation techniques, such as linear, log-linear, or spline-based methods.  

In many countries, central banks or finance ministries publish official yield curve data for government bonds. In the U.S., the Federal Reserve’s H.15 statistical release offers a widely watched daily yield curve that goes from 1 month out to 30 years.

## Bootstrapping Zero-Coupon Spot Rates

Constructing a yield curve typically involves extracting zero-coupon rates—also known as spot rates. If you had perfectly liquid zero-coupon bonds at every maturity you care about, life would be easy: you’d just look at their yields, and voila! But real markets mostly have coupon-bearing bonds, so we do what’s called “bootstrapping.” The idea is to solve for the unknown spot rates one maturity at a time:

• Start with a short maturity bond (say, a 6-month T-Bill). Its yield, measured as a zero-coupon yield, is straightforward.  
• Next, move on to a one-year coupon bond. You already know the 6-month spot rate from the previous step, so you can solve for the 12-month spot rate.  
• Keep going out the curve, each time using the previously solved spot rates in your calculations to isolate the new rate for the next maturity.

The process can be summarized in a set of present value equations. For instance, if a bond with maturity T pays a coupon C in each period plus the final principal redemption, the present value of all those cash flows (discounted by the relevant spot rates) will equal the bond’s market price.

Mathematically, for a simplified two-period bond priced at P with nominal coupon payment C each period and face value F:

P = C(1 + S₁)^(-1) + (C + F)(1 + S₂)^(-2)

• S₁ is the (1-year) spot rate previously computed,  
• S₂ is the 2-year spot rate you now solve for,  
• P is the current bond price.

This approach continues outward until you construct a whole set of spot rates for each relevant maturity.

## Fitting a Smooth Curve: Polynomial and Spline Methods

Sure, we could just connect the dots between these discrete points, but that often results in a choppy graph. Market participants generally prefer a smooth yield curve, and one that doesn’t produce large spikes where no real pricing rationale exists. This is where curve-fitting methodologies come in:

• Polynomial Fitting: You approximate the spot rate curve by a polynomial function of maturity, like a quadratic or cubic polynomial. The drawback is that polynomials can get “wavy” at longer maturities.  
• Spline Interpolation: Splines are piecewise polynomials that can adapt more flexibly to the shape of the market data. They typically ensure continuity in the first and second derivatives, making the resulting curve smooth yet responsive to actual yield data.  

Different institutions use different methods. Some rely on specialized software (like the Nelson-Siegel or Svensson approach) that fits the entire yield curve with a small number of parameters believed to capture level, slope, and curvature. In my opinion, the best choice often depends on data availability, frequency of updates, and how “noisy” your observed yields are.

## Swap Curves as Benchmarks

It’s not unusual to see analysts using a swap curve—derived from fixed-for-floating interest rate swaps—as a benchmark instead of government yields. This is especially common where government bond markets are less liquid or might carry varying risk premiums. In such cases, a swap curve can be more reflective of commercial bank risk, and indeed some markets quote corporate borrowing costs as a spread over the swap curve, not the sovereign curve.

Remember: the “risk-free” label might not always be spot-on for government bonds, particularly if the issuer’s credit risk is non-negligible (as unfortunately demonstrated by sovereign debt crises). So local markets or large financial institutions might rely on the swap market for a robust yield-curve reference, especially at intermediate maturities.

## Real-World Challenges

Sometimes, you’ll notice jumped yields at certain maturities—maybe the 5-year note trades at a yield that’s out of line with the 4-year and 6-year. This can happen if demand for that particular bond soared or if it got flagged for “special” liquidity in the repo market (i.e., short sellers need it desperately). Such local distortions can hamper the smoothness of the derived curve.

Data frequency can also be an issue. If you’re only getting daily or weekly quotes but the market is moving rapidly, your yield curve might become stale. In my experience on a trading floor, we’d see intraday data updates to the yield curve, especially if a major economic release hit the market (e.g., non-farm payrolls or inflation data). An accurate curve must reflect real-time conditions or, at minimum, the most recent reliable quotes.

## Illustrating a Yield Curve

Below is a simple Mermaid line chart illustrating a typical upward-sloping yield curve, where yields increase with maturity. This is, of course, a stylized example—real yield curves can invert or flatten based on economic and monetary policy conditions.

```mermaid
%% A simple line chart in Mermaid, showing a typical upward-sloping Treasury yield curve
%% Note: This diagram is purely illustrative, not real data.
%% We will approximate yields for 1Y, 2Y, 5Y, 10Y, 30Y.
line
    title "A Stylized Treasury Yield Curve"
    xAxis "Maturity (years)"
    yAxis "Yield (%)"

    series1: Title="Treasury Yields"
    1: 3
    2: 3.4
    5: 3.8
    10: 4.1
    30: 4.3
```

## Sample Python Bootstrapping Code

Let’s say you want to see how an automated approach might look. Suppose you have bond prices for 1-year, 2-year, and 3-year Treasuries. The “bootstrapping” logic in Python might look like this:

```python
import numpy as np

# Maturities in years
maturities = [1, 2, 3]
coupon_rates = [0.02, 0.025, 0.03]
bond_prices = [0.98, 0.965, 0.95]

spot_rates = []

for i in range(len(maturities)):
    maturity = maturities[i]
    coupon = coupon_rates[i]
    price = bond_prices[i]
    
    # Semi-annual or annual assumption might vary. For simplicity, assume annual.
    # Summation of discounted coupons:
    sum_of_coupons = 0
    for t in range(i):
        sum_of_coupons += coupon / ((1 + spot_rates[t]) ** (t+1))
    
    # Solve for the new spot rate
    # price = PV of coupons + PV of final redemption
    # final redemption = coupon + principal (assume principal = 1)
    # price = sum_of_coupons + (coupon + 1) / (1 + new_spot_rate)^maturity
    # So new_spot_rate = solve for x in that equation
    # We'll do a quick iteration or direct approach using Newton's method.
    
    # For demonstration let's do a naive approach with a simple loop
    def f(x):
        return sum_of_coupons + (coupon + 1)/(1 + x)**maturity - price
    
    guess = 0.03
    for _ in range(100):
        # small derivative-based approach
        epsilon = 1e-6
        f_val = f(guess)
        f_deriv = (f(guess + epsilon) - f(guess - epsilon)) / (2 * epsilon)
        guess = guess - f_val / f_deriv
    
    spot_rates.append(guess)

print("Bootstrapped spot rates (annual):", spot_rates)
```

This snippet is purely illustrative. In practice, you’ll likely rely on specialized libraries or meticulously coded routines that can handle day-count conventions, settlement dates, frequency of coupon payments, and more. But hopefully this helps you see the mechanics.

## Best Practices in Curve Construction

• Validate Data: Make sure bond prices and yields are correct and consistent. Outliers may drastically skew the curve.  
• Choose an Appropriate Interpolation Method: Linear, log-linear, or spline approaches should be chosen based on how you intend to use the curve (pricing, risk management, etc.).  
• Frequent Updates: If market conditions are volatile, your curve should be recalculated more often.  
• Document Everything: Regulators and internal risk committees often want to see explanations for the chosen construction methodology, especially for large portfolios.  

## Potential Pitfalls and Common Errors

• Ignoring Liquidity Differences: On-the-run versus off-the-run yield differences can lead to mispricing if you blindly rely on older issues.  
• Mismatching Day Count Conventions: Some markets quote yields based on ACT/365, others on 30/360. In bootstrapping, be sure consistency is maintained.  
• Overfitting the Curve: Trying to perfectly fit each data point can introduce weird ripples in the curve, making it less robust for future predictions.  
• Extrapolation Danger: Beyond the longest observed maturity, any yield you compute is purely theoretical. Be sure to label that portion as such.  

## Practical Exam Tips

• Understand the Bootstrapping Logic: If the CFA exam question asks you to compute a spot rate given certain bond cash flows, systematically apply present value equations. Show your steps clearly—examiners love to see how you arrive at the final number.  
• Keep an Eye on Conventions: The exam might specify semi-annual or annual compounding. Read carefully and adapt your formulas.  
• Use Clear Notation: If you’re dealing with multiple rates (S₁, S₂, S₃…), label them properly so you don’t mix them up in your margin notes.  
• Watch Your Time: Constructed-response questions on the exam have a way of tempting you into long calculations. Practice a structured approach—like a mini table or formula list—to ensure you don’t get bogged down.  

## References

• Tuckman, B. and Serrat, A. Fixed Income Securities: Tools for Today’s Market.  
• CFA Institute Research Foundation on Yield Curve Construction.  
• Federal Reserve Economic Data (FRED) for Daily Treasury Yield Curve Rates:  
  https://fred.stlouisfed.org/  

(You might also check out the Bank for International Settlements or the European Central Bank for alternative yield curve data sets. They often publish their own versions using local government securities.)

## Test Your Knowledge: Constructing Yield Curves

{{< quizdown >}}

### Which of the following statements best describes the purpose of bootstrapping in yield curve construction?

- [ ] It estimates forward rates by extrapolating from historical averages.  
- [x] It derives zero-coupon (spot) rates from a set of coupon-bearing instruments by solving sequentially for each maturity's discount factor.  
- [ ] It uses principal component analysis to identify yield curve factors like level, slope, and curvature.  
- [ ] It calculates a weighted average yield across all maturities.  

> **Explanation:** Bootstrapping focuses on extracting individual spot rates from coupon-bond data, starting from shorter maturities and working toward longer ones.

### When constructing a Treasury yield curve, which securities are typically considered the most liquid?

- [ ] Stripped Treasuries  
- [x] On-the-run Treasuries  
- [ ] Off-the-run Treasuries  
- [ ] Treasury inflation-protected securities (TIPS)  

> **Explanation:** On-the-run Treasuries are the newest, most actively traded issues for each maturity, generally enjoying the highest liquidity.

### What is one primary advantage of using a swap curve instead of a sovereign bond curve in certain markets?

- [ ] Swap curves typically offer lower yields than sovereign bonds at all maturities.  
- [ ] Swap curves are easier to bootstrap because they have semiannual resets.  
- [x] The swap market might be more liquid in certain regions, providing a more reliable benchmark than sovereign bonds at those maturities.  
- [ ] There is no advantage—sovereign bonds are always preferred.  

> **Explanation:** In some markets, the interest rate swap market is more liquid or has less distortion from government credit risk, making it a superior benchmark.

### Which type of interpolation is often favored for yield curve smoothing due to its ability to avoid sharp “kinks” in the curve?

- [ ] Simple linear interpolation  
- [ ] Exponential smoothing  
- [ ] Polynomial curve fitting of any degree  
- [x] Spline interpolation  

> **Explanation:** Splines are piecewise polynomials that ensure smooth transitions across maturities, preventing abrupt changes in the curve’s shape.

### In bootstrapping, which previously computed rates are used when determining the spot rate for the next maturity?

- [x] All shorter maturity spot rates generated in earlier steps  
- [ ] Only the first maturity spot rate  
- [x] All relevant forward rates from the prior step  
- [ ] No previously computed rates are used  

> **Explanation:** The entire sequence of previously derived spot (and sometimes forward) rates is used to solve for each subsequent maturity’s discount factor.

### Which of the following is a common problem if you overfit your yield curve to precisely match every observed bond price?

- [x] The curve may exhibit artificial wiggles or irregular shapes.  
- [ ] The curve will be guaranteed to accurately predict future rates.  
- [ ] Risk management becomes simpler.  
- [ ] There are no downsides to overfitting a curve.  

> **Explanation:** Overfitting can create an unrealistic or unstable curve that reacts excessively to random market noise and offers poor predictive power.

### One reason an off-the-run Treasury might yield more than an on-the-run Treasury is:

- [x] Off-the-run Treasuries are less liquid and often trade at a discount to reflect that liquidity premium.  
- [ ] It has a higher coupon payment by government mandate.  
- [x] Trading desks use them exclusively for central bank purchases.  
- [ ] Off-the-run Treasuries are considered riskier because they have different credit quality.  

> **Explanation:** Off-the-run issues generally see lower trading volumes, which can push their yields higher compared to the newer, more liquid on-the-run issues.

### Which among the following best describes the relationship between coupon rates and zero-coupon spot rates in bootstrapping?

- [x] Each coupon payment is discounted at the appropriate spot rate corresponding to that payment’s timing.  
- [ ] All coupon payments are discounted at the same average spot rate over the bond’s life.  
- [ ] Coupon rates must be higher than the spot rates.  
- [ ] Spot rates are derived by dividing the bond’s coupon rate by its price.  

> **Explanation:** The essence of bootstrapping is discounting each coupon flow at the proper spot rate for its maturity.

### When dealing with day count conventions, what is a crucial consideration in yield curve modeling?

- [x] Consistency across all instruments used for curve construction is essential.  
- [ ] You should mix as many day count conventions as possible.  
- [ ] The day count convention is irrelevant.  
- [ ] Choose the 30/360 convention for all coupon-bearing bonds, regardless of market preference.  

> **Explanation:** If you mix day count conventions (e.g., ACT/365 vs. 30/360) without caution, you can introduce errors in pricing and yield calculations.

### True or False: The accuracy of a yield curve can be compromised if a significant macroeconomic event occurs and the curve is not updated in a timely manner.

- [x] True  
- [ ] False  

> **Explanation:** A major event like a rate announcement or unexpected economic data can shift yields quickly. If your yield curve doesn’t incorporate new data, it will no longer reflect current market conditions.

{{< /quizdown >}}
