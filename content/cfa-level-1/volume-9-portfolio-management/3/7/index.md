---
title: "Empirical Testing of CAPM in Different Markets"
description: "Learn about foundational CAPM tests, anomalies in returns, multi-factor expansions, and how market structures affect CAPM results in both developed and emerging economies."
linkTitle: "3.7 Empirical Testing of CAPM in Different Markets"
date: 2025-03-21
type: docs
nav_weight: 3700
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-9-portfolio-management"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

It's kinda interesting—way back when I first encountered the Capital Asset Pricing Model (CAPM) in my finance studies, I thought: "So, you're telling me that a single factor, beta, explains how risky a stock is, and that this alone should drive expected returns?" Honestly, I was a bit skeptical. Yet CAPM became a hallmark of modern financial theory—providing a straightforward framework to link risk (measured by beta) and return. It served as a theoretical backbone for portfolio management, bridging everything we covered in prior discussions on systematic versus nonsystematic risk (see the section on Systematic Versus Nonsystematic Risk) and the role of the market portfolio (see The Capital Market Line and the Separation Principle). 

But in the real world, does CAPM always hold up? Over the decades, researchers have set out to test the model using actual market data. Again and again, they've either found support for CAPM or discovered glaring exceptions—commonly labeled anomalies—suggesting that something else, beyond simple market beta, is at play. In practice, these anomalies often lead to risk-adjusted outperformance for certain types of stocks. 

Below, we’ll unpack the most prominent empirical tests of CAPM across different markets, ranging from classic U.S. data studies to international contexts in both emerging and developed markets around the globe. We'll also examine the significance of major anomalies like the small-cap effect and value effect, referencing the milestone work by Fama and French. By the end, we’ll explore how practitioners and academics differ in their acceptance of CAPM’s power, and we’ll see that, while CAPM still plays a valuable role in performance measurement (discussed in Performance Measures such as Sharpe, Treynor, Jensen’s Alpha), its predictive capacity has its limits.

## Early Empirical Evidence

In the early days, researchers took William Sharpe’s and John Lintner’s CAPM theory—where expected return is a linear function of an asset’s beta—and decided to investigate whether high-beta stocks really do earn proportionally higher average returns than low-beta stocks. The typical approach to an empirical test, also known as an “Empirical Test,” brings actual returns data and runs regressions to see if the slope of the risk-return relationship aligns with CAPM’s theoretical predictions.

One high-profile study was conducted during the 1970s, focusing on the U.S. market. The test outcomes initially looked promising; yes, there was a positive relationship between the beta of a portfolio and its average return over time, consistent with the theory. People embraced CAPM wholeheartedly. 

However, as more data was collected and as we rolled into the 1980s and 1990s, more sophisticated tests chipped away at CAPM’s universality. For instance, some academics reported that the relationship between average stock returns and beta was flatter than what CAPM predicted. In other words, while high-beta portfolios tended to outperform low-beta portfolios, the difference in returns wasn’t as large as the pure CAPM formula would suggest. Certain risk factors, which CAPM lumps into the “residual” bucket, might actually matter a lot.

## Notable Anomalies and Their Influence

Let’s zero in on some well-known anomalies that have challenged CAPM’s ability to comprehensively explain returns:

### Small-Cap Effect

The small-cap effect refers to the historical tendency of smaller-company stocks to generate higher returns over the long run than CAPM’s beta-based expectations would imply. The founding paper by Banz (1981) suggested that small-firm stocks in the U.S. market often outperformed larger, well-known firms. This was labeled an “anomaly” because CAPM could not fully explain why these smaller companies earned such a premium.

This effect has sometimes been attributed to higher risk, greater volatility, or liquidity challenges, but multiple analyses reveal that conventional beta alone doesn’t account for the entire premium. In the decades since, the “small-cap premium” has varied in magnitude—and in some periods has even reversed—but overall it remains a key test of whether beta is the only risk factor relevant for returns.

### Value Effect

Another crowd favorite is the value effect—the empirical finding that “value stocks” (e.g., those with low price-to-book ratios, high dividend yields, or strong fundamentals compared to their market price) offer higher returns than what CAPM would predict for a given beta. Classic work by Fama and French (1992) provided compelling evidence that stocks with lower price-to-book ratios consistently outperformed growth stocks. This is the so-called “value premium,” and it’s not small.

Again, CAPM has no direct mechanism to incorporate whether a stock is “value” or “growth.” If two companies have the same beta but differ in their price-to-book ratios, CAPM would predict identical expected returns. Yet the data begs to differ, revealing that value stocks historically “punch above” their expected weight in performance. 

### Momentum or Other Effects

Following the small-cap and value stories, additional anomalies have continued to challenge the CAPM framework. Momentum, where stocks that have performed well in the recent past tend to continue performing well in the near future, lingers as another major factor. While momentum is not part of the standard CAPM, it’s had robust empirical support internationally and across asset classes. This further highlights that the single-beta CAPM approach may miss important systematic drivers of return.

## The Fama-French Factor Approach

By the early 1990s, the writing on the wall was clear: the single-factor CAPM, though useful as a conceptual anchor, did not capture the full picture of expected returns. Enter Eugene Fama and Kenneth French with their seminal three-factor model, which includes (1) market risk (similar to CAPM’s beta), (2) size (small minus big, or SMB), and (3) value (high book-to-market minus low book-to-market, or HML). Later expansions with a momentum factor (Carhart four-factor model) and other tweaks followed. 

Fama-French research is especially relevant because it systematically documented how size and value factors had explanatory power above and beyond traditional beta. Where CAPM might fail to explain the extra returns small-cap stocks or value stocks produce, the three-factor model claims that these are legitimate risk factors. Over time, these additional factors have been widely embraced by practitioners, from asset managers constructing factor-based or “smart beta” portfolios, to global pension funds seeking to gain exposure to structural return premia. 

## Cross-Country Differences and Data Challenges

All right, so how does CAPM fare in a global context? Well, that depends on where you look. Emerging markets, for instance, may have different market structures, liquidity, and investor bases. Data availability is often less robust in emerging countries, meaning that any “Empirical Test” of CAPM can be marred by inconsistent or incomplete data. High transaction costs, capital controls, and political risk can also distort standard market risk measures.

• In certain developed markets (think the U.K., Japan, parts of Europe), historical returns have displayed patterns similar to those in the U.S.—anomalies like size and value appear to exist, though sometimes with region-specific nuances.  
• In emerging markets, the results are even more mixed. A small number of early tests seemed to confirm CAPM predictions, but as more thorough data sets became available, strong factor effects similar to those found in developed markets also started popping up. For instance, you might find that small-cap stocks in some emerging markets dramatically outperform, but the reasons could be complicated by economic cycles, currency risks, market microstructure, or other local factors.  

Hence, cross-country tests often reaffirm that beta alone isn’t enough to understand global returns. Meanwhile, the “reliability” of results can be shaky when you’re dealing with short time series or incomplete data typical of smaller emerging markets. 

## Practitioners Versus Academics: The Ongoing Debate

So, where does that leave us? You might say there's a bit of an academic-practitioner divide. Many academics continue to refine multi-factor and behavioral models, emphasizing that the original CAPM is simply too crude to capture real-world complexity. Additionally, you’ll find a litany of academic papers documenting new anomalies (profitability, investment, quality, you name it) that further crimp CAPM’s domain.

Practitioners, on the other hand, sometimes adopt a more pragmatic stance. It’s common for a financial advisor, portfolio manager, or consultant to rely on CAPM as a first-pass tool for discount rates or for evaluating performance in a simplified manner (often in synergy with Jensen’s alpha—see Jensen’s Alpha in Active Management). It’s easy to teach, easy to communicate to clients, and historically recognized as a baseline. But behind the scenes, many of these same practitioners layer on additional factors or rely on multi-factor risk models to gauge expected returns more accurately.

Additionally, the debate arises in the context of real-world data. Some years, small-cap stocks in certain markets drastically underperform, making it look like the small-cap premium has disappeared altogether—maybe for good. Others demand that anomalies shouldn’t be considered anomalies if they persist across an array of different markets and timeframes. This leads to a never-ending cycle of argument and re-examination.

## Using CAPM Results with Caution

Given the various anomalies described above, plus potential differences across geographies, it makes sense to interpret CAPM results carefully. Here are practical thoughts on how to approach it:

• Combine CAPM with Multi-Factor Approaches: If you rely solely on beta you might be missing out on size, value, momentum, quality, or other relevant factors. Cross-checking CAPM-based expected returns with a Fama-French or Carhart model can produce more nuanced estimates.  
• Keep in Mind Market-Specific Contexts: Emerging markets or smaller, less-liquid exchanges might exhibit unique patterns that aren’t stable across short time intervals. Beta estimates in these markets can also be highly sensitive to extreme events.  
• Remain Alert to Shifts in Market Structures: CAPM assumes stable relationships over time—a big assumption. Changes in regulations, introduction of new trading technologies or derivatives (see 3.15 Hedging Systematic Risk with Derivatives), or major shifts in monetary policy can alter the risk-return relationship.  
• Acknowledge Behavioral Factors: Some anomalies may be explained by rational or behavioral arguments (see The Behavioral Biases of Individuals for more on investor psychology). For instance, the small-cap effect might arise from mispricing or from institutional constraints that ignore smaller stocks.  
• Remember Transaction Costs: Even if some anomaly can be exploited in theory, high transaction costs might devour the profits. In many empirical studies, the listed anomalies are calculated ignoring real frictions, so real-world results might be less exciting.  

In short, CAPM is still a valuable yardstick for measuring systematic risk and for framing the notion of risk premia, but it’s not the entire story.

## Example: Regression Approach in Python

Just to illustrate how one might test CAPM in a basic sense, consider the following Python snippet. Suppose we have a time series of returns for a particular stock, a market index, and a risk-free rate. We can run a simple regression to estimate beta and alpha:

```python
import pandas as pd
import statsmodels.api as sm

# 'Stock_Return', 'Market_Return', 'RiskFree_Rate'

daily_data['Excess_Stock'] = daily_data['Stock_Return'] - daily_data['RiskFree_Rate']
daily_data['Excess_Market'] = daily_data['Market_Return'] - daily_data['RiskFree_Rate']

X = sm.add_constant(daily_data['Excess_Market'])
y = daily_data['Excess_Stock']
capm_model = sm.OLS(y, X).fit()

print(capm_model.summary())
```

In an ideal CAPM world, we’d expect the intercept (often called Jensen’s alpha) to be statistically zero, indicating that market beta alone explains the stock’s returns. In practice, significant positive or negative alphas may reflect mispricing or the existence of additional risk factors not captured by beta.

## Visualizing CAPM and Anomalies

To get a sense of how CAPM’s neat line interacts with real-world anomalies, consider the following Mermaid diagram:

```mermaid
flowchart LR
    A["Theoretical CAPM <br/> (Single Factor: Beta)"]
    B["Empirical Testing <br/> (Historical Returns Data)"]
    C["Findings: <br/> - Small-Cap Effect <br/> - Value Effect <br/> - Other Anomalies"]
    D["Refinement: <br/> Multi-Factor Models <br/> (e.g., Fama-French)"]

    A --> B
    B --> C
    C --> D
```

This flow helps us visualize how theory (single-factor CAPM) leads to empirical testing, which then uncovers anomalies, eventually motivating multi-factor expansions like Fama-French.

## Practical Advice for CFA® Exam Candidates

• You’ll definitely want to remember that CAPM is not perfect but still widely referenced. Be able to explain *why* it’s incomplete—mention small-cap, value, and momentum as classic examples.  
• Understand the Fama-French model’s basic premise: the alpha from CAPM often isn’t zero because other factors like size and value matter.  
• Keep an eye out for cross-country references. The exam might present a scenario comparing an emerging market to a developed market, or it might question how to interpret betas in shallow, illiquid markets.  
• CIPM or advanced portfolio questions might demand knowledge of *how* to check if alpha is statistically insignificant. Having a conceptual understanding of regression results will help.  
• Remind yourself that the big disclaimers about data quality, transaction costs, and short sample windows are always relevant.  

## Common Pitfalls and Challenges

• Overlooking Data Quality: Poor data can lead to spurious results, especially in less efficient or newer markets.  
• Confusing Beta with Volatility: Beta measures covariance with the market, not just standard deviation. Some test participants incorrectly conflate “high volatility” with “high beta.”  
• Assuming Stability of Beta: Beta can shift over time, particularly for companies undergoing structural changes.  
• Ignoring Transaction Costs: Many tests of anomalies come from frictionless assumptions that can’t hold in the real world.  

## Conclusion

Empirical testing of CAPM in different markets has revealed a rich tapestry of findings. Initially validated by early research, CAPM eventually met its challengers in the form of persistent anomalies—like small-cap and value premiums—that signaled the existence of additional risk factors not captured by beta alone. The Fama-French suite of models further demonstrated that size and value exposures carry meaningful explanatory power, highlighting CAPM’s limitations as a single-factor model.

Nonetheless, CAPM retains an important role. Whether you’re a portfolio manager looking for a quick yardstick, or a financial analyst evaluating discount rates for capital budgeting, CAPM’s conceptual framework is straightforward and widely recognized. Yet, any real-world practitioner or advanced student of finance should apply CAPM results with caution, layering in multi-factor approaches and staying mindful of data quality, transaction frictions, and evolving market structures. 

In practice, it’s wise to think of CAPM as a baseline. The real target, for both research and portfolio management, is building a well-rounded view of what truly drives returns—be they fundamental, behavioral, or macroeconomic factors. Understanding the power and the pitfalls of CAPM is essential for any candidate stepping into higher-level portfolio management decisions, both for the Level I exam and beyond.

## References and Further Reading

- Banz, R. W. (1981). “The Relationship Between Return and Market Value of Common Stocks.” Journal of Financial Economics.  
- Fama, E. F., & French, K. R. (1992). “The Cross-Section of Expected Stock Returns.” The Journal of Finance.  
- Carhart, M. M. (1997). “On Persistence in Mutual Fund Performance.” The Journal of Finance.  

## Exam Tips

• Show you can articulate how CAPM is tested in practice. A typical exam scenario might present a regression output. Be prepared to interpret alpha, beta, and measure significance.  
• Recall small-cap, value, and momentum anomalies: these are go-to topics for question writers.  
• Stress the difference between CAPM’s theoretical underpinnings and empirical findings—examiners often want you to highlight key assumptions that break in real markets (e.g., frictionless trading).  
• For item-set questions, watch for details about data frequency (daily vs. monthly) or total vs. excess return. These can shift your interpretation of results.  
• If you see something about a small or emerging market, remember potential pitfalls around liquidity and data coverage. Beta might be an unreliable measure if the market is not well integrated globally.  

## Test Your Knowledge: CAPM Empirical Analysis and Anomalies

{{< quizdown >}}

### According to the classic CAPM, which of the following statements is correct?

- [ ] Value stocks consistently outperform due to their higher beta.  
- [ ] Only size and market factors matter for predicting returns.  
- [x] Expected returns are a function of beta relative to the market.  
- [ ] Non-systematic risk is the key determinant of returns.  

> **Explanation:** CAPM states that the expected return on a security depends on its beta (systematic risk) relative to the market portfolio. It does not address value factors or non-systematic risk.  

### Which of the following is an example of an observed “anomaly” that challenges the completeness of CAPM?

- [x] Value effect.  
- [ ] CAPM’s assumption of a risk-free asset.  
- [ ] The correlation between market sectors.  
- [ ] Diversification beyond 20 stocks.  

> **Explanation:** The value effect is a well-documented anomaly in which low price-to-book (value) stocks provide returns not fully explained by market beta.  

### Why does the small-cap effect cast doubt on the CAPM’s ability to fully explain returns?

- [ ] Large caps have zero beta.  
- [ ] Small-cap returns are perfectly correlated with large caps.  
- [x] Small stocks often outperform what their beta level alone would predict.  
- [ ] The size factor has zero actual premium in all markets.  

> **Explanation:** Empirical findings show that small stocks deliver higher returns than CAPM beta would suggest, indicating that size itself may be an independent risk factor.  

### Which statement best characterizes the findings of Fama and French (1992)?

- [ ] They found no evidence of a relationship between beta and returns.  
- [x] They discovered that size and value factors have explanatory power beyond CAPM.  
- [ ] They advocated that CAPM completely explains cross-sectional returns.  
- [ ] They concluded that emerging markets show no anomalies.  

> **Explanation:** Fama and French added size and value factors into the traditional CAPM framework, demonstrating that these factors explain variations in returns more effectively than beta alone.  

### What is one key limitation of empirical CAPM tests in emerging markets?

- [x] Data availability and quality can be poor, affecting reliability.  
- [ ] Beta tends to be negative for emerging market stocks.  
- [x] There is perfect market efficiency in developing economies.  
- [ ] Capital controls do not matter.  

> **Explanation:** Limited data coverage and inaccurate or incomplete historical returns present a major challenge when testing CAPM in emerging markets.  

### How do liquidity constraints potentially undermine CAPM-based conclusions?

- [x] They can make actual transaction costs significantly higher than theoretical assumptions.  
- [ ] They encourage arbitrageurs to buy infinite amounts of high-beta stocks.  
- [ ] They guarantee that alpha will always be negative.  
- [ ] They have no effect on any form of asset pricing model.  

> **Explanation:** CAPM assumes frictionless markets, but liquidity constraints and transaction costs can erode returns and invalidate pure CAPM-based estimates.  

### Which of the following is a recommended approach given the known CAPM anomalies?

- [x] Supplement CAPM with additional risk factors like size or value.  
- [ ] Discard CAPM altogether and rely solely on divergences.  
- [x] Assume that alphas in regression are always zero.  
- [ ] Use only emerging market data to ensure stable results.  

> **Explanation:** Practitioners often incorporate multi-factor models (like Fama-French) because CAPM alone frequently leaves out important dimensions such as size, value, and momentum.  

### A portfolio manager runs a CAPM regression and finds statistically significant positive alpha. Which statement most likely applies?

- [x] There could be omitted factors—like size, value, or momentum—that explain this alpha.  
- [ ] CAPM is conclusively correct and alpha should never differ from zero.  
- [ ] The manager’s dataset is unreliable.  
- [ ] Statistically significant alpha automatically disqualifies further testing.  

> **Explanation:** A positive alpha may indicate that additional factors beyond beta (e.g., size, value, or momentum) are impacting returns, which CAPM alone misses.  

### Which concept is part of the justification for the Fama-French three-factor model?

- [x] Systematic risk is only one dimension; size and value can add explanatory power.  
- [ ] Only volatility matters for portfolio returns.  
- [ ] CAPM fully explains all known anomalies.  
- [ ] Market returns are typically zero in the long run.  

> **Explanation:** Empirical evidence has shown that size and value factors help explain the portion of returns that remains unexplained by CAPM.  

### True or False: A high R² in a single-factor CAPM regression always means the model fully captures all sources of risk.

- [x] True  
- [ ] False  

> **Explanation:** Even if the model shows a high R², there may be other priced risk factors beyond beta (e.g., size, value, momentum) that CAPM does not capture. High R² alone is not conclusive proof that CAPM is complete.  

{{< /quizdown >}}
