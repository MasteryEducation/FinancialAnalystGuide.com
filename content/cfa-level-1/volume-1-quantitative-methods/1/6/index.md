---
title: "Comparison of Major Return Measures"
description: "Explore the major return metrics used in finance—Arithmetic Mean, Geometric Mean, Money-Weighted Return (MWRR), Time-Weighted Return (TWRR), Annualized Return, and more—to evaluate performance, reflect personal experience, and model investment outcomes effectively."
linkTitle: "1.6 Comparison of Major Return Measures"
date: 2025-03-21
type: docs
nav_weight: 1600
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction
Measuring investment returns accurately can be a bit like trying to capture a moving target with a camera. You might press the shutter button at one moment, only to see the picture (or, in this case, the portfolio) change a moment later. And yes, it’s easy to feel overwhelmed by all these different ways of “taking the picture.” But trust me, each measure of return provides a distinct (and vital) lens.

In this section, we’ll discuss some of the major return measures—Holding Period Return, Arithmetic Mean Return, Geometric Mean Return, Money-Weighted Return (MWRR), Time-Weighted Return (TWRR), Annualized Return, and Continuously Compounded Return. We’ll explain their definitions, how and when to use them, and what pitfalls to watch for. We’ll also talk about how each measure suits different financing and performance evaluation needs. Even if you’re a bit fuzzy about which measure is best to show growth over time, don’t worry. This chapter will walk you through the concepts step by step and, hopefully, leave you feeling a bit more confident—and maybe slightly amused at how something so “mathy” can be so critical in the real world of money.

## The Universe of Return Measures

### Holding Period Return
Holding Period Return (HPR) is one of the most straightforward measures. It simply calculates the percentage change in the value of your investment over a specific period. For a single holding period, such as one year, the HPR is:

{{< katex >}}
\text{HPR} = \frac{\text{Ending Value} - \text{Beginning Value} + \text{Dividends or Income}}{\text{Beginning Value}}
{{< /katex >}}

• Highlights:  
– Easy to understand—just plug in the start value, end value, and any income.  
– Great for measuring return over a single, discrete period.

However, HPR doesn’t easily lend itself to multi-period interpretations where multiple holding periods with different cash flows are involved. If you want to compare returns for, say, three consecutive years, you need other measures that reflect compounding (Arithmetic Mean, Geometric Mean, TWRR, etc.).

### Arithmetic Mean Return
The Arithmetic Mean Return is the simple average of periodic returns. If you had returns \\(r_1, r_2, \ldots, r_n\\) in each of \\(n\\) periods, then:

{{< katex >}}
\text{Arithmetic Mean Return} = \frac{r_1 + r_2 + \cdots + r_n}{n}
{{< /katex >}}

• Highlights:  
– Often used in forecasting expected returns.  
– Tends to be higher than the Geometric Mean (especially when returns are volatile).

Because it doesn’t account for compounding, the Arithmetic Mean can sometimes overstate the actual long-run performance of an investment. It is, however, still quite handy if you want a quick-and-dirty snapshot of “average” performance. Just be sure not to conflate it with cumulative growth over multiple periods.

### Geometric Mean Return
The Geometric Mean focuses on the “true” growth rate of an investment over multiple periods, accounting for the effect of compounding. For returns \\(r_1, r_2, \ldots, r_n\\), the Geometric Mean Return (\\(R_g\\)) is:

{{< katex >}}
R_g = \left[(1 + r_1)(1 + r_2)\cdots(1 + r_n)\right]^{\frac{1}{n}} - 1
{{< /katex >}}

• Highlights:  
– Incorporates compounding, making it an excellent measure of what actually happens to your capital over time.  
– Typically smaller than the Arithmetic Mean when returns vary significantly.  

If you’re thinking, “Which measure do I use to show the ‘true’ average growth of my investment?” the Geometric Mean Return is usually the right call. Indeed, it’s the standard for presenting multi-year returns in many performance reports.

### Money-Weighted Return (MWRR)
The Money-Weighted Return (MWRR), also known as the Internal Rate of Return (IRR), captures the effect of cash inflows and outflows. It focuses on how your personal investment timeline and contributions shape the end outcome. Mathematically, MWRR solves for \\(r\\) in the following equation:

{{< katex >}}
\sum_{t=0}^{T} \text{CF}_t (1 + r)^{-t} = 0
{{< /katex >}}

• Highlights:  
– Incorporates timing of cash flows (e.g., new contributions, redemptions).  
– Reflects the actual return an investor experiences with a particular investment or portfolio over time.

This measure is highly relevant for an investor’s personal experience because if you inject a large sum of money right before a market dip, your personal return suffers a lot—MWRR captures that. However, if you’re a portfolio manager trying to show skill, MWRR might not “tell your story” accurately, because it folds in client-driven cash flow decisions.

### Time-Weighted Return (TWRR)
Time-Weighted Return eliminates the effect of cash flow timing. Each sub-period return is weighted equally, regardless of the amount of money in the portfolio during that sub-period. The TWRR calculation breaks your total investment horizon into sub-periods around any external cash flows, then chains those sub-period returns together.

If the sub-period returns for \\(n\\) periods are \\(r_1, r_2, \ldots, r_n\\), then:

{{< katex >}}
\text{TWRR} = \left[ (1 + r_1)(1 + r_2)\cdots(1 + r_n)\right]^{\frac{1}{n}} - 1
{{< /katex >}}

• Highlights:  
– The industry-standard measure for evaluating a portfolio manager’s performance.  
– Neutralizes the impact of when investors add or withdraw money.

Picture TWRR as a measure purely of investment skill—great for manager comparisons. If the manager had no control over large cash inflows or outflows, TWRR is fairer than MWRR.

### Annualized Returns
Annualized returns standardize the return to a yearly basis. If you have a multi-year total return, you convert it by taking the geometric mean for each year. For instance, if your investment delivered a total cumulative return \\(R_\text{total}\\) over \\(n\\) years, then:

{{< katex >}}
\text{Annualized Return} = (1 + R_\text{total})^{\frac{1}{n}} - 1
{{< /katex >}}

• Highlights:  
– The ultimate “apples-to-apples” measure when comparing returns across assets or managers in different time frames.  
– Often the measure used in performance summaries, pitch books, or published results.

Annualized returns are nice for folks who say, “I just want to know the yearly performance, on average,” or for comparing across multiple investments that have different total time horizons.

### Continuously Compounded Returns (Log Returns)
Continuously Compounded Returns are based on the natural logarithm of \\(\frac{P_t}{P_{t-1}}\\). The single-period log return \\(r_\text{log} \approx \ln\left(\frac{P_t}{P_{t-1}}\right)\\). For multiple periods, you simply sum the log returns:

{{< katex >}}
r_{\text{log,total}} = \sum_{k=1}^{n} \ln\left( \frac{P_k}{P_{k-1}} \right)
{{< /katex >}}

• Highlights:  
– Simplifies certain mathematical modeling, especially in portfolio theory and quantitative finance.  
– Easier to handle when you’re dealing with advanced risk models (i.e., normal distribution puzzles).

In plain English, if you want more accurate statistical or modeling convenience, you might prefer log returns. But let’s be honest, your client might stare at you blankly if you present results as log returns. For everyday performance reporting, annualized returns or TWRR might be more intuitive.

## Suitability for Performance Evaluation
If you’re assessing how skilled a portfolio manager is, TWRR is the gold standard because it nixes the distracting effect of investor deposits and withdrawals. MWRR, by contrast, is superb if you care about your personal journey. If you have a friend who invests $100 each month into a mutual fund, the MWRR best captures that friend’s personal return.

## Sensitivity to Cash Flows
• MWRR (Internal Rate of Return) will directly reflect the timing of cash flows. Inject a lump sum at an inopportune time, and your MWRR could go negative even if the manager did an excellent job.  
• TWRR is unaffected by timing or magnitude of cash flows, focusing purely on the sub-period returns.

Clients who pay money managers often prefer TWRR to judge the manager. But if you’re just a typical investor wanting to know how you actually did, MWRR is more personally relevant.

## Arithmetic vs. Geometric Means
We so often hear that the Arithmetic Mean Return “exaggerates” or “overestimates” growth over the long run. Exactly—because it ignores compounding. By contrast, the Geometric Mean Return accounts for the year-over-year or period-over-period accumulation. This difference matters most in volatile markets. If your returns swing from +50% to -50%, the arithmetic average might say “0% mean return,” ignoring the fact that you’ve actually lost money overall.

## Ease of Interpretation
• Annualized returns: Easiest for that “soundbite” or elevator pitch—“We earned 7.2% per year on average.”  
• Arithmetic mean: Very easy to compute but might not reflect actual multi-period growth.  
• Log (continuously compounded) returns: Great for modeling, but less intuitive for many end clients.  

I personally remember a conversation with a friend where I blabbed on about “log returns.” Their eyes glazed over in 10 seconds flat. So if you’re a researcher or a quant, go for it. Otherwise, understand that your typical investor might appreciate the more conventional returns measures.

## Consistency in Application
Pro tip: pick one measure (or a set of them) and apply it consistently across periods and different portfolios. Nothing confuses stakeholders more than flipping from arithmetic to geometric or from TWRR to MWRR without a clear explanation. A lot of institutional reporting guidelines suggest presenting TWRR for manager skill plus MWRR to show client experience. Just make sure to label and define each carefully.

## Potential Distortions
• Arithmetic Mean can be misleading for multi-year performance if returns vary dramatically.  
• TWRR can overstate or understate actual investor experience if the timing of flows was especially favorable or unfavorable.  
• MWRR can be biased by an investor’s decisions on when to add or withdraw money.  

One big pitfall is using the wrong measure to judge a portfolio manager. If a manager has no control over an investor’s deposits or withdrawals, it’s not fair to ding them for a negative MWRR. Instead, the TWRR shows how well their strategy actually performed.

## Integration in Reporting
In the real world, asset managers provide multiple measures to paint a full picture. You’ll see a TWRR to demonstrate the manager’s skill, but also a dollar-weighted measure that indicates what real-world investors actually experienced. Always verify which measure is being reported—don’t assume that the number you see is necessarily TWRR.

In performance reports, you may also see short references to Sharpe Ratios or other risk-adjusted metrics that rely on the chosen return measure, typically annualized. No single measure can provide a complete perspective on portfolio performance, risk, and growth. A thorough performance report usually includes several complementary metrics.

## A Quick Diagram for Return Measurement
Below is a simple Mermaid diagram illustrating how practitioners typically choose and apply different return measures:

```mermaid
flowchart LR
    A["Select Return Measure"] --> B["Collect Data <br/> (Prices, Cash Flows, etc.)"]
    B["Collect Data <br/> (Prices, Cash Flows, etc.)"] --> C["Apply Calculation <br/> (e.g., TWRR, MWRR)"]
    C["Apply Calculation <br/> (e.g., TWRR, MWRR)"] --> D["Interpret Result <br/> (Compare, Evaluate)"]
    D["Interpret Result <br/> (Compare, Evaluate)"] --> E["Report and Disclose <br/> (Clear labeling)"]
```

## Mini Case Study: Comparing TWRR and MWRR
Let’s say you’re analyzing your personal returns from a mutual fund you invested in last year. You contributed an initial \$10,000 at the start. Three months later, the market soared, and your \$10,000 shot up to \$11,500—a 15% return. You got excited and decided to add another \$5,000. For the remainder of the year, the total \$16,500 (initial appreciation plus new contribution) stayed fairly flat, ending the year at \$16,830. If you simply used TWRR, you’d segment the year into sub-periods:  
• Sub-period 1 (start of year to just before contribution)  
• Sub-period 2 (after contribution to end of year)

TWRR would show an impressive return in the first sub-period and a smaller return in the second sub-period—somewhere around 2%. But if you computed MWRR, you’d find that your overall result was noticeably lower because most of your money was exposed to the time period when the return was small.  

• TWRR is thus flattering in this scenario. It says, “Your manager generated a great first-quarter return.”  
• MWRR reflects the reality for you, the investor: “Well, I only ended up making a small return on the big sum I’d added partway through.”

## Best Practices and Common Pitfalls
1. Match the Measure to the Purpose:  
   – Evaluating manager performance? TWRR.  
   – Measuring personal experience? MWRR.  
   – Checking multi-period compound growth? Geometric Mean.  
2. Be Aware of Volatility:  
   – If returns vary a lot, Arithmetic Mean can be misleading.  
3. Disclose Clearly:  
   – Show exactly how returns were calculated.  
   – Indicate whether reinvested dividends or distributions are included.  
4. Avoid Overemphasizing a Single Metric:  
   – Combine TWRR, MWRR, and some form of risk-adjusted measure (like Sharpe) for a more holistic view.

## Practical Python Snippet
Below is a quick snippet showing how you could compute Arithmetic and Geometric Mean returns for a list of periodic returns in Python. This snippet is purely illustrative and not optimized:

```python
import numpy as np

period_returns = [0.04, -0.02, 0.10, 0.03]  # 4%, -2%, 10%, 3%

arithmetic_mean = np.mean(period_returns)
print(f"Arithmetic Mean Return: {arithmetic_mean:.2%}")

prod = 1.0
for r in period_returns:
    prod *= (1 + r)
geometric_mean = prod ** (1/len(period_returns)) - 1
print(f"Geometric Mean Return: {geometric_mean:.2%}")
```

If your returns were 4%, -2%, 10%, and 3%, Arith. Mean might suggest 3.75% average, while the Geo Mean would show something slightly lower, illustrating the effect of compounding.

## References and Further Reading
• Bernstein, W. (2002). The Four Pillars of Investing. McGraw-Hill.  
• Grinold, R., & Kahn, R. (2000). Active Portfolio Management. McGraw-Hill.  
• CFA Institute. (2020). “Measuring Returns and Evaluating Performance” in CFA Program Curriculum Level I.  

Remember, each measure can tell a different story. Use them wisely, disclose them completely, and your analyses will be far more credible.

---

## Mastering Return Measures: 10-Question Quiz

{{< quizdown >}}

### 1. Which return measure is MOST commonly used to evaluate a portfolio manager’s skill independently of client-driven cash flows?
- [ ] Arithmetic Mean Return
- [ ] Money-Weighted Return
- [x] Time-Weighted Return
- [ ] Continuously Compounded Return

> **Explanation:** Time-Weighted Return (TWRR) strips out the effects of cash inflows and outflows, focusing on the investment manager’s skill rather than the timing of contributions and withdrawals.

### 2. The Money-Weighted Return (MWRR) is particularly sensitive to:
- [ ] Overall market volatility
- [x] The timing and magnitude of external cash flows
- [ ] Sector rotation decisions
- [ ] Accrual accounting policies

> **Explanation:** MWRR (or IRR) explicitly accounts for the timing and amount of each cash flow. Large cash investments added or withdrawn at certain times will disproportionately affect the MWRR.

### 3. Which measure typically overestimates the long-term growth of a highly volatile investment?
- [x] Arithmetic Mean Return
- [ ] Geometric Mean Return
- [ ] Log Return
- [ ] Time-Weighted Return

> **Explanation:** Arithmetic Mean Return does not account for compounding and can inflate the perceived average return when volatility is high.

### 4. An investment grows from $10,000 to $12,000 over two years, with no external cash flows. The total return is 20%. The corresponding annualized return (geometric) is closest to:
- [ ] 10.00%
- [ ] 18.00%
- [x] 9.54%
- [ ] 20.00%

> **Explanation:** The annualized return = \\(\sqrt{1.20} - 1 \approx 0.0954\\) or 9.54%.

### 5. The Time-Weighted Return is computed by:  
- [x] Compounding sub-period returns equally, ignoring external cash flows’ effect on exposure  
- [ ] Solving for the discount rate that sets the net present value of cash flows to zero  
- [ ] Summing the arithmetic returns and dividing by the number of periods  
- [ ] Taking the log of the price ratio over each period

> **Explanation:** TWRR segments the total life of the investment into sub-periods based on external cash flow dates and then compounds each sub-period return to get the final figure, ignoring the dollar amounts involved in each sub-period.

### 6. When measuring your own personal investment experience with irregular contributions, which measure is usually MOST appropriate?
- [x] Money-Weighted Return
- [ ] Time-Weighted Return
- [ ] Arithmetic Mean Return
- [ ] Continuously Compounded Return

> **Explanation:** MWRR captures how the timing of personal contributions and withdrawals affects the final outcome.

### 7. Which statement about Arithmetic and Geometric Means is correct?  
- [x] Arithmetic Mean ≥ Geometric Mean when returns are volatile  
- [x] Geometric Mean reflects the compound growth rate over multiple periods  
- [ ] Geometric Mean is always greater than Arithmetic Mean  
- [ ] Arithmetic Mean is always negative for volatile series

> **Explanation:** The Arithmetic Mean is generally greater than or equal to the Geometric Mean, due to the compounding effect that the Geometric Mean incorporates. The Geometric Mean indeed measures the compound growth over multiple periods.

### 8. A portfolio’s TWRR is 8%. The investor’s MWRR is 5%. Which is MOST likely true?
- [x] The investor added more capital just before a period of underperformance
- [ ] The investor withdrew capital just before a period of underperformance
- [ ] The manager performed poorly in early periods
- [ ] The manager outperformed the market in all periods

> **Explanation:** If the MWRR is lower than the TWRR, it often indicates cash was added at a less opportune time (e.g., right before a decline), dragging down the investor’s overall return.

### 9. Log (continuously compounded) returns are especially useful because:
- [x] They simplify mathematical modeling, especially regarding normal distributions
- [ ] They make TWRR calculations simpler
- [ ] They eliminate the effect of leverage
- [ ] They automatically adjust for external cash flows

> **Explanation:** Log returns are widely used in quantitative finance for simplifying computations related to portfolio returns, volatility, and normal distribution assumptions. They do not inherently adjust for external cash flows.

### 10. True or False: Time-Weighted Return (TWRR) can significantly differ from Money-Weighted Return (MWRR) if there are large cash inflows or outflows during the measurement period.
- [x] True
- [ ] False

> **Explanation:** TWRR ignores the timing and magnitude of external cash flows, while MWRR incorporates them. Large flows can make these two measures diverge substantially.

{{< /quizdown >}}
