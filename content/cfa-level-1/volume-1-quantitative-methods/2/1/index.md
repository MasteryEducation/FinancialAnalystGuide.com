---
title: "Present Value (PV) of Expected Future Cash Flows"
description: "Explore how discounting captures the time value of money and learn to calculate present values of single sums, annuities, and perpetuities with real-world applications."
linkTitle: "2.1 Present Value (PV) of Expected Future Cash Flows"
date: 2025-03-21
type: docs
nav_weight: 2100
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Understanding the Time Value of Money

It’s often said that a dollar today is worth more than a dollar tomorrow. That might sound obvious—but why? The answer lies in what we call the “time value of money.” Money on hand can be invested to earn a return, so receiving cash earlier gives you more flexibility and growth potential. In practical terms, if someone owes you money, you’d prefer they pay now instead of next year, right? That preference is rooted in your ability to put that cash to work immediately—perhaps by depositing it in a bank or buying shares in a stock you believe will rise in value.

I remember in my early days of studying finance, I was offered a chance to receive $500 immediately for some tutoring I did, or wait a year for $550. I ran the numbers in my head—factoring in what I might earn if I invested that $500. It quickly became clear that analyzing future cash flows was a crucial tool for decision-making. This idea—that we can compare money received in different time periods by converting future sums to their equivalent value today—is the foundation of present value (PV).

## The Concept of Present Value

Present Value (PV) answers a straightforward question: “How much is a future payment or series of payments worth today?” To find out, we apply a “discount rate” that incorporates a risk-free rate plus any risk premiums we deem necessary. The general principle is:

(1) The greater the required rate of return, the smaller the present value of a future sum.  
(2) The further out in time the future amount is received, the smaller its present value.

Formally, when you have a projected cash flow in period n and a discount rate r, its present value is calculated as:

$$
\text{PV} = \frac{\text{FV}}{(1 + r)^n}.
$$

If that looks a bit cryptic, just think of it as taking your future sum (FV) and “shrinking” it back to the present by applying the discount factor \\( \frac{1}{(1 + r)^n} \\).

### Single Lump Sum

Suppose you’re due to receive \$1,000 one year from now. Given a discount rate r of 5%:

{{< katex >}}
\text{PV} = \frac{1{,}000}{(1 + 0.05)^1} = \frac{1{,}000}{1.05} \approx \$952.38.
{{< /katex >}}

In other words, \$952.38 today, invested at 5% for one year, will grow into \$1,000 in a year. If that’s the required rate of return, you’re indifferent between \$952.38 now or \$1,000 in one year.

## Multiple Future Cash Flows

Real-world investment decisions often involve a series of future cash flows, each arriving at different points in time—such as coupon payments from bonds or expected dividends from a stock. You can think of each future cash flow as a separate mini-lump sum, discount it back to the present, and then add up all those present values. That might seem tedious, but it’s simply the idea of “cash flow additivity”:

{{< katex >}}
\text{PV}_\text{Total} = \sum_{i=1}^{N} \frac{\text{CF}_i}{(1 + r)^{t_i}}.
{{< /katex >}}

Below is a small Mermaid diagram showing a general timeline of cash flows over three years for an investment paying different amounts at each year end:

```mermaid
flowchart LR
    A["Time 0 <br/> (Present)"] --> B["CF1 in Year 1"]
    B --> C["CF2 in Year 2"]
    C --> D["CF3 in Year 3"]
```

If each “CF” is different, discount them individually:

{{< katex >}}
\text{PV} = \frac{CF_1}{(1+r)} + \frac{CF_2}{(1+r)^2} + \frac{CF_3}{(1+r)^3}.
{{< /katex >}}

You might see a large variety of real-world cash flow patterns—some might be even, some might be growing, and some might be random. The principle doesn’t change: discount them each and sum them.

## Future Value and Its Relationship to Present Value

It can also help to grasp how Future Value (FV) relates to PV. The formula for FV is:

{{< katex >}}
\text{FV} = \text{PV} \times (1 + r)^n.
{{< /katex >}}

The reason for studying both directions—FV and PV—is that many financial questions flip between the two. For instance, if you want to know how much your investment will be worth in five years, you calculate FV. If you have a final amount in mind and want to know what you could pay today for that target redemption, you calculate PV.

## Annuities and Perpetuities

### Annuities

Many financial products, like mortgages or regular bond coupons, involve a stream of equal payments over a fixed period—this is called an annuity. An examples is an “ordinary annuity,” which pays at the end of each period:

{{< katex >}}
\text{PV}_\text{ordinary annuity} = PMT \times \left[\frac{1 - \frac{1}{(1 + r)^n}}{r}\right],
{{< /katex >}}

where \\(PMT\\) is the fixed payment each period, \\(r\\) is the discount rate, and \\(n\\) is the number of payments. This formula “bundles” the discounting of each payment into one expression.

If the payments come at the beginning of each period—like rent payments for a building—this is an “annuity due.” Its present value is slightly higher because you get each payment one period earlier. The formula is similar, just multiply by \\((1 + r)\\).

### Perpetuities

A perpetuity is an infinite stream of equal payments that never ends—for example, certain preferred stocks, or projects that pay out indefinitely. The formula for a perpetuity’s present value is delightfully simple:

{{< katex >}}
\text{PV}_\text{perpetuity} = \frac{PMT}{r}.
{{< /katex >}}

This formula is extremely sensitive to changes in the discount rate (r). If r is very small, that denominator is small, making the present value quite large, which is intuitive: if discount rates are near zero, future money is almost as good as present money.

## Accounting for Changing Discount Rates

We often assume a constant discount rate for simplicity, but real-world scenarios may require a shift in the discount rate if longer maturities face different risk premiums or the market environment changes. In IFRS- or US GAAP-based company valuations, analysts might use a term structure of interest rates (e.g., yield curve dynamics) so that each year's cash flow is discounted using a different rate:

{{< katex >}}
\text{PV} = \frac{\text{CF}_1}{(1 + r_1)^1}
          + \frac{\text{CF}_2}{(1 + r_2)^2}
          + \dots
          + \frac{\text{CF}_n}{(1 + r_n)^n}.
{{< /katex >}}

Tracking which discount rate applies to which time period is crucial. Constructing a clear timeline can help ensure no confusion when discounting each flow at the appropriate rate.

## Practical Examples and Case Study

Imagine you’re evaluating a simple investment that pays you these flows: \$100 one year from now, \$200 two years from now, and \$300 three years from now. Your required return is 6% per year. Combining the discounting approach:

{{< katex >}}
\begin{aligned}
\text{PV} &= \frac{100}{(1.06)^1} + \frac{200}{(1.06)^2} + \frac{300}{(1.06)^3} \\
&= 94.34 + 177.02 + 251.89 \\
&= \$523.25 \text{ (approx.)}
\end{aligned}
{{< /katex >}}

So, if someone offers to sell you that investment for \$500, you’d probably consider it a good deal, because the present value is closer to \$523.25, implying there’s some potential for profit at that purchase price (assuming no other hidden risks).

## Building Intuition with Timelines

One of the best ways to avoid mistakes is to draw a simple timeline showing what you expect each year:

• Mark out each future cash flow at the relevant point in time.  
• Label the discount rates or interest rates that apply to each period.  
• If multiple discount rates exist, notate them near the relevant period.  
• Summarize the present value at time zero.

Here’s a more direct example in Mermaid showing a fixed payment annuity (an ordinary annuity):

```mermaid
flowchart LR
    A["Time 0 <br/> Start"] --> B["Payment $PMT <br/> End of Year 1"]
    B --> C["Payment $PMT <br/> End of Year 2"]
    C --> D["Payment $PMT <br/> End of Year n"]
```

By discounting each of these payments individually, you’ll get the total present value of the annuity.

## Common Pitfalls

• Forgetting the compounding or discounting periods: If a payment arrives monthly, but you just do an annual discount factor, you’ll overstate or understate the present value.  
• Mixing up an ordinary annuity with an annuity due: Shifting the timing of the payments by one period can lead to substantially different values.  
• Using the wrong discount rate: Failing to adjust for risk or ignoring the term structure can produce misleading results.  
• Over-reliance on a single discount rate: In unusual macroeconomic environments, blindly applying a constant discount rate for multiple years can yield unrealistic appraisals.

## Exam Relevance and Applications

In a Level I context (or any foundational exam setting), you’ll likely see straightforward present value questions: single lumpsum discounting, basic annuity calculations, or short case vignettes exploring equivalences between sums at different points in time. In more advanced exams (such as Level III), complexities like varying discount rates, forward rates, or multi-factor discounting can appear. Regardless of the complexity level, the core principle—present value as a reflection of the time value of money—remains the same.

## Best Practices and Final Exam Tips

• Always label your timeline: Visualizing each payment ensures you keep track of the correct number of discounting periods.  
• Watch out for payment timing: Confirm if it’s an ordinary annuity (end-of-period) or an annuity due (beginning-of-period).  
• Double-check your discount rates: If the exam question specifically notes changes in the interest rate environment after a certain year, you must incorporate that.  
• Know your formulas but also understand them conceptually: The exam might give scenario-based questions that hinge more on understanding than pure memorization.

## References

- Bodie, Z., Kane, A., & Marcus, A. J. (2019). “Investments.” 11th Edition. McGraw-Hill.  
- Fabozzi, F. J. (2008). “Bond Markets, Analysis, and Strategies.” Pearson.  
- CFA Institute Level I Curriculum, “Quantitative Methods: The Time Value of Money.”  
- Investopedia article on Time Value of Money: [https://www.investopedia.com/terms/t/timevalueofmoney.asp](https://www.investopedia.com/terms/t/timevalueofmoney.asp)

---

## Test Your Knowledge: Present Value of Expected Future Cash Flows

{{< quizdown >}}

### Which one best describes the concept of "present value" in finance?

- [ ] Future earnings increased by an interest rate.
- [x] The current worth of a future sum of money after discounting it by the required rate of return.
- [ ] The coupon rate of most fixed-income securities.
- [ ] The net worth of a company’s assets minus its liabilities.

> **Explanation:** “Present value” refers to how we quantify a future cash flow’s value in today’s dollars, reflecting the time value of money.

### You are expecting to receive $1,000 in two years, and the discount rate is 10%. Which formula correctly calculates the present value?

- [ ] PV = 1,000 × (1 + 0.10)²
- [ ] PV = 1,000 × (1 − 0.10)²
- [ ] PV = 1,000 − (1,000 × 0.10)²
- [x] PV = 1,000 ÷ (1 + 0.10)²

> **Explanation:** The future sum of $1,000 must be discounted by the factor (1 + 0.10)² to reflect its current value.

### An investor just received an inheritance that will pay her $5,000 at the end of each year for three years (ordinary annuity). If her required rate of return is 8%, which expression best represents the present value?

- [ ] PV = 5,000 × (1 + 0.08)³
- [x] PV = 5,000 × [(1 − (1 / (1 + 0.08)³)) / 0.08]
- [ ] PV = 5,000 ÷ [(1 − (1 + 0.08)³) / 0.08]
- [ ] PV = 5,000 × (1 − 0.08)³

> **Explanation:** Ordinary annuities are valued with the formula: PV = PMT × [1 − (1 / (1+r)ⁿ)] / r.

### A perpetuity that pays $100 per year indefinitely with a discount rate of 5% has a present value of:

- [ ] $0 (it is infinite).
- [ ] $105.
- [ ] $2,000.
- [x] $100 ÷ 0.05 = $2,000.

> **Explanation:** The perpetuity formula is PMT / r. Here, $100 / 0.05 = $2,000.

### For multiple future cash flows that occur annually but are not equal each year, the present value is best found by:

- [ ] Applying the perpetuity formula.
- [ ] Applying the growing annuity formula.
- [x] Discounting each future cash flow separately, then summing those values.
- [ ] Using the perpetuity formula plus an annuity factor.

> **Explanation:** When cash flows differ, discount each flow individually and sum, as there is no single closed-form formula like an annuity or perpetuity.

### Changing discount rates over time implies:

- [x] Different discount factors are applied for each portion of the timeline.
- [ ] The perpetuity formula is invalid.
- [ ] Future values cannot be computed.
- [ ] It only affects perpetuities but not annuities.

> **Explanation:** With varying rates, a separate discount rate is used per period, resulting in different discount factors at each time step.

### What typically happens to the present value if the required rate of return increases, holding all else constant?

- [x] It decreases.
- [ ] It increases.
- [ ] It does not change.
- [ ] It becomes zero.

> **Explanation:** A higher discount rate reduces the present value of future cash flows.

### When dealing with an annuity due, how do you adjust the ordinary annuity formula to find the present value?

- [ ] No adjustment is required.
- [ ] Subtract one period from the annuity length.
- [ ] Add an extra discount factor to each payment.
- [x] Multiply by (1 + r) after using the ordinary annuity formula.

> **Explanation:** An annuity due requires an additional factor of (1 + r) because each payment occurs one period earlier than in the ordinary annuity case.

### One common pitfall in time value of money calculations is:

- [ ] Failing to multiply each cash flow by the coupon payment.
- [ ] Mixing up the coupon rate with the discount rate.
- [x] Using an annual discount rate when the payments occur more frequently (e.g., monthly) without adjusting for period length.
- [ ] Referring to present value as net present value.

> **Explanation:** If a payment schedule is monthly but the discount rate is annual (and not converted), the result misstates the true present value.

### True or False: A timeline approach is rarely helpful in discounting multiple cash flows.

- [ ] True
- [x] False

> **Explanation:** A timeline helps visualize and organize each cash flow and the corresponding discount rates, reducing errors.

{{< /quizdown >}}
