---
title: "Practice Item Set: MBS Cash Flow Projections"
description: "Learn to project MBS cash flows under varying prepayment speeds and macro scenarios, exploring principal, interest, and duration impacts in a vignette-style problem."
linkTitle: "13.4 Practice Item Set: MBS Cash Flow Projections"
date: 2025-03-21
type: docs
nav_weight: 13400
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-9-portfolio-management"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Overview

Mortgage-Backed Securities (MBS) are considered one of the most fascinating areas in fixed income. They embody a pool of home mortgages, each with the option for the borrower to prepay. As a result, MBS cash flows can be somewhat unpredictable, intimately tied to changes in interest rates, borrower refinancing behavior, and even big-picture factors like employment conditions or housing price trends. Here, we’ll build on the fundamentals introduced in “13.1 Mortgage Pass-Through Basics,” “13.2 Prepayment Risk and Contraction/Extension,” and “13.3 Weighted Average Maturity (WAM) and WAC” to craft a comprehensive practice item set. 

In this section, we’ll work through a vignette-style example where your task is to project monthly cash flows for a pass-through MBS under various interest rate and prepayment scenarios. The ultimate goal? Gain proficiency in analyzing the interplay of interest rate movements, borrower behavior, principal repayment structures, and yield spreads on MBS performance.

Anyway, before diving in, I have a quick anecdote (this might sound a tad informal, but it’ll help our learning): I once attempted to project precise MBS cash flows on a spreadsheet after a mere weekend reading about prepayment theory. Let’s just say, I spent days untangling reams of projected monthly principal from actual borrower patterns. It was humbling. So let’s go step by step!

## The Vignette: Projecting MBS Cash Flows

Suppose we have a simple pass-through MBS backed by a pool of residential mortgages. The MBS has the following characteristics at inception (Month 0):

• Pool’s Total Initial Principal Balance: $100 million  
• Weighted Average Coupon (WAC): 4.5% (Annual)  
• Weighted Average Maturity (WAM): 360 months (30 years)  
• Monthly Servicing Fee: 0.25% of the outstanding pool balance annually (taken from the 4.5% WAC)  
• Base-Case Prepayment Speed: 150 PSA (Public Securities Association standard; an industry measure of prepayment speed)  

Assume we have three interest rate scenarios over the next 12 months:

1. Base Scenario: Rates remain stable; we stay at the same 4.5% environment, and the 150 PSA prepayment assumption holds.  
2. Fast Prepayment Scenario: A 50 basis point decline in market rates occurs by Month 2, which pushes borrowers to refinance faster (300 PSA).  
3. Slow Prepayment Scenario: Rates rise by 50 basis points by Month 2, so fewer borrowers refinance (100 PSA).  

We also incorporate monthly changes in interest rates, just to get a sense of how partial transitions could occur. Let’s present this data in a short table. (In an exam environment, you might see something like this in the vignette.)

| Month | Market Rate | Prepayment Speed (PSA)     | Comments                                        |
|-------|------------|----------------------------|-------------------------------------------------|
| 0     | 4.5%       | 150                        | Initial environment                             |
| 1     | 4.5%       | 150                        | No rate change yet                              |
| 2     | 4.0%       | 300 (Fast) / 150 (Base) / 100 (Slow) | Rate decline or increase realized depending on scenario |
| 3–12  | Varies 4.0–4.5% or 4.5–5.0% | 300 / 150 / 100     | Reflect ongoing environment                     |

We’ll ignore small monthly changes in borrower credit performance or other credit enhancements for simplicity, focusing purely on interest rates, prepayment speeds, and their effect on cash flows.  

## Illustrating the MBS Pass-Through

Below is a simple diagram showing how cash flows transit from borrowers to MBS investors:

```mermaid
flowchart LR
A["Pool of Mortgages <br/> (Homeowners)"] --> B["Servicer <br/>(Collects Payments)"]
B["Servicer <br/>(Collects Payments)"] --> C["Monthly Pass-Through <br/>(Principal + Interest)"]
C["Monthly Pass-Through <br/>(Principal + Interest)"] --> D["MBS Investors"]
```

Servicing fees are taken first, and the net interest is passed on. The principal portion is passed on as well, influenced significantly by the prepayment speed.

## Step-by-Step Solution Outline

Understanding MBS cash flow projections might feel overwhelming. Let’s break down the process into a series of steps you can replicate in an exam setting.  

### Step 1: Calculate the Scheduled Interest Component

At the beginning of each month, the MBS’s outstanding principal balance is multiplied by the WAC (annual) to determine the month’s total interest accrued. However, we must factor in the servicing fee to find the net interest to the MBS holder.

• Monthly Gross Interest Rate = (WAC) / 12  
• Monthly Servicing Fee = (Servicing Fee Rate) / 12  
• Net Monthly Interest to MBS Investor = Monthly Gross Interest Rate – Monthly Servicing Fee  

So, if the WAC is 4.5% per year and the servicing fee is 0.25% per year, then:

Monthly Gross Interest Rate = 4.5% ÷ 12 = 0.375%  
Monthly Servicing Fee = 0.25% ÷ 12 ≈ 0.0208%  
Net Monthly Interest Rate = 0.375% – 0.0208% = 0.3542%  

You multiply that by the outstanding principal balance for each month to determine the interest portion that goes to investors.

### Step 2: Incorporate Scheduled Principal Repayment

Mortgages generally amortize according to a standard schedule (level payments over 30 years, in our example). The scheduled principal component is just the portion of the monthly mortgage payment that exceeds the interest. In the pass-through, these scheduled principal amounts get aggregated across all loans and passed on to investors.

If we ignore separate monthly mortgage payment formulas, we can rely on an approximation for scheduled principal that you can find in standard MBS calculation references. Or, you might do a direct formula.

The standard monthly mortgage payment formula (for each $1 of the mortgage pool) is often expressed as:

{{< katex >}}
\text{Payment} = r \times \frac{1}{1 - (1 + r)^{-N}}
{{< /katex >}}
  
Where:  
• r = monthly mortgage rate = (WAC / 12)  
• N = total number of months remaining (initially 360 for a 30-year).  

Then you multiply that result by the outstanding principal. The portion above interest is the scheduled principal amount.

### Step 3: Add Prepayments

This is the fun (and stressful) part. Prepayments happen when borrowers send in payments above the scheduled amounts, typically to refinance or pay off their mortgage early:

• Prepayment = Outstanding Principal × Prepayment Rate  

In the world of pass-through MBS, the prepayment rate is often expressed through PSA (Public Securities Association) speeds. 100 PSA implies a standard benchmark assumption: minimal prepayments in the first months of the mortgage, ramping up gradually over 30 months, and eventually plateauing. 200 PSA doubles that benchmark rate, 300 PSA triples it, etc.

For an exam setting, you might be given the “prepayment vector” in a table for each month. You multiply the outstanding principal by that monthly prepayment rate to find how much principal is repaid early.  

### Step 4: Calculate the New Outstanding Balance

At the end of each month, you reduce the outstanding balance by the sum of scheduled principal plus prepayments. It becomes your starting principal for the next month’s calculations.

### Step 5: Project Six or Twelve Months Forward

You’d repeat Steps 1–4 for each month. By the time you reach six or twelve months out, you’ll have a set of monthly principal and interest flows, plus an updated outstanding balance and recalculated Weighted Average Maturity (WAM).  

### Step 6: Determine Weighted Average Maturity (WAM)

WAM measures how quickly the principal in an MBS is repaid. After six or twelve months, you recalculate by weighting each future month’s principal by its “time to payment” and dividing by the total principal. More rapid prepayments will shorten the WAM; slower prepayments or higher rates can lengthen it.  

### Step 7: Evaluate Yield Impact

Finally, you want to see how changes in projected cash flows affect your yield. We typically discount each month’s projected cash flow (both principal and interest) at the MBS discount rate, or compare them to a benchmark yield curve, to derive an internal rate of return (IRR). If prepayments accelerate:

• More principal arrives sooner, raising the potential reinvestment risk (and potentially lowering the total yield if reinvestment rates are now lower).  
• The MBS might appear to have a shorter effective duration.  

If prepayments slow, you might hold the investment longer, which can be beneficial in a rising rate environment (collecting more interest at lower funding costs) or detrimental if you wanted your principal back sooner.  

## Detailed Example Calculations

Let’s do a quick example for Month 1 (Base Case: 150 PSA, stable 4.5% interest rate):

1. Outstanding Principal at Start of Month 1: $100 million  
2. Monthly Net Interest Rate = 0.3542% (as we found above)  
3. Interest Payment to MBS Investors = $100,000,000 × 0.003542 ≈ $354,200  
4. Scheduled Principal Payment (approximate). For a 30-year mortgage with a 4.5% annual rate, monthly mortgage payment per $1 notional is about $0.00507. Multiply by $100 million to get $507k, then subtract the $354k in interest to get ~ $153k of scheduled principal.  
5. Prepayment = Principal × monthly prepayment rate. Under 150 PSA, let’s guess the monthly prepayment rate is 0.15% for this early month. Then that’s $150,000 in additional principal.  
6. Total Principal Repaid = $153k + $150k = $303k  
7. Outstanding Principal End of Month 1 = $100,000,000 – $303,000 ≈ $99.697 million  

Repeat in the same manner for months 2, 3, …, up to month 12.  

Of course, in a real test scenario you might see fewer steps (maybe only a single month’s worth of data to keep the problem solvable), but the principle remains the same.

## Advanced Insights: Impact of Discount Rates, Forward Curves, and Prepayment Modeling

Once you’ve computed the monthly cash flows, you could discount them by an appropriate yield curve (say, the swap curve or Treasury curve plus a spread). Each scenario (fast, base, slow) might produce a different IRR on the MBS. The differences can be significant if, for instance, the forward curve implies a certain path for future rates or if there’s a big shift in economic fundamentals like unemployment or home price appreciation.

• **Discount Rate Sensitivity**: If MBS spreads widen due to credit concerns or liquidity constraints, the present value of future cash flows could fall even if prepayments do not change.  
• **Forward Curves**: If the curve steepens, the discounting for longer-dated cash flows might be drastically different from shorter-dated ones.  
• **Modeling Assumptions**: A small shift in prepayment assumption can alter projected WAM by several months or more. This effect can be critical for managing portfolio duration and aligning with liability structures.

## Python Code Snippet for Illustrative Calculations

Below is a brief snippet of Python-like pseudocode that might help automate the monthly calculations in a practice environment:

```python
import math

def monthly_interest_rate(annual_rate):
    return annual_rate / 12

def project_mbs_cash_flows(principal, annual_coupon, servicing_fee_annual,
                           monthly_prepay_rate, months=12):
    results = []
    for m in range(1, months+1):
        gross_rate = monthly_interest_rate(annual_coupon)
        servicing_rate = monthly_interest_rate(servicing_fee_annual)
        net_rate = gross_rate - servicing_rate

        interest_payment = principal * net_rate
        # Simple approximate method for scheduled principal:
        monthly_payment_per_1 = (gross_rate) / (1 - (1 + gross_rate)**(-360))
        scheduled_principal = principal * monthly_payment_per_1 - interest_payment
        prepayment = principal * monthly_prepay_rate
        total_principal_pmt = scheduled_principal + prepayment
        new_principal = principal - total_principal_pmt

        results.append((m, interest_payment, total_principal_pmt, new_principal))
        principal = new_principal

    return results

cf_results = project_mbs_cash_flows(
    principal = 100_000_000,
    annual_coupon = 0.045,
    servicing_fee_annual = 0.0025,
    monthly_prepay_rate = 0.0015, # 0.15% monthly as an example
    months=12
)

for row in cf_results:
    print(f"Month {row[0]} - Interest: {row[1]:.2f}, Principal: {row[2]:.2f}, Remaining: {row[3]:.2f}")
```

This snippet is offhandedly simplified and does not reflect actual refinements for changing prepayment speeds after each month or dynamic interest rates. But it shows how you might structure a loop to handle monthly computations.

## Why Macro Matters

Look, MBS prepayments aren’t just about interest rates. Borrower psychology, local/regional economic conditions, house price appreciation, and even seasonality can play a role. If unemployment rises in a region, that could slow refinancing (and ironically, in some cases, lead to faster defaults—which is a separate issue in credit risk modeling). Treasury issuance patterns, Federal Reserve policy, and appetite for mortgage credit are also factors that can influence yields and spreads.  

MBS analysts (check “Prudential Fixed Income Research: ‘Scenario Analysis of Pass-Through Cash Flows’” for interesting case studies) typically generate multiple scenarios—often base, up, down, and maybe a stress scenario. Then they weight them by probability or use them to glean the distribution of possible outcomes.  

## Exam Approach

When you see a question in the Level II exam about pass-through MBS and prepayments, keep calm and systematically:

• Identify key data such as initial principal, WAC, WAM, and prepayment model (PSA).  
• Clarify the timeline: how many months do you need to project?  
• Carefully separate interest from principal in monthly calculations. (Be mindful of the servicing fee!)  
• Summarize monthly principal paydowns and ending balances.  
• Don’t forget to read the question carefully – are they asking for the interest portion? The yield impact? The new average life?  

Preparation with item sets like these helps you become comfortable with multi-step analytics under exam pressure.

## References and Further Reading

• CFA Institute Practice Problems and Item Sets for Fixed Income.  
• Prudential Fixed Income Research: “Scenario Analysis of Pass-Through Cash Flows.”  
• Manuals for Bloomberg or Intex MBS Analytics Tools (for real-world scenario modeling).  
• Related upcoming content in “Chapter 14: Collateralized Mortgage Obligations (CMOs)” for structuring MBS tranches.

## Sample Exam Questions: MBS Cash Flow Projections in Different Scenarios

Below is a set of sample questions to test your mastery of MBS projections, prepayments, and yield implications under different scenarios.

## MBS Cash Flow Projection Challenges Quiz

{{< quizdown >}}

### Under a standard MBS pass-through structure, which of the following components is passed onto investors each month?  
- [ ] Only interest payments, as principal is retained by the servicer  
- [x] Both scheduled principal and interest, net of servicing fees  
- [ ] Only the net servicing fee plus principal  
- [ ] Only principal payments that are scheduled, excluding prepayments  

> **Explanation:** Pass-through MBS investors receive both interest (net of servicing fees) and principal, including any unscheduled principal from prepayments.

### If the market interest rate decreases by 50 bps, leading to a doubling of the PSA prepayment speed, what is the most likely effect on the MBS’s weighted average maturity (WAM)?  
- [x] WAM will likely shorten  
- [ ] WAM will remain unchanged  
- [ ] WAM will extend  
- [ ] WAM will invert  

> **Explanation:** When rates decline, borrowers tend to refinance faster, increasing prepayments and shortening the time it takes for the overall principal to be returned, lowering the weighted average maturity.

### An MBS pool has a WAC of 5.0% and a servicing fee of 0.35%. Which of the following represents the monthly net coupon to investors?
- [ ] 5.35% / 12  
- [x] (5.0% − 0.35%) / 12  
- [ ] 5.0% / 12  
- [ ] (5.35% − 5.0%) / 12  

> **Explanation:** The net coupon to investors is simply the annual WAC minus the annual servicing fee, all divided by 12 for a monthly rate.

### Which of the following best describes how an MBS’s yield is typically calculated for valuation purposes?
- [ ] Using an exact formula that ignores prepayment behavior  
- [ ] Using only OAS (Option-Adjusted Spread) with no reference to discount rates  
- [x] Discounting projected monthly cash flows by a benchmark yield plus a spread  
- [ ] Using forward rate agreements alone  

> **Explanation:** MBS yields are normally found by projecting monthly cash flows and discounting them by an appropriate benchmark yield curve plus a spread that captures prepayment and credit risk.

### In a scenario where prepayments come in slower than expected (e.g., dropping from 150 PSA to 100 PSA), which of the following is a potential consequence for MBS investors?
- [ ] Reinvestment risk decreases  
- [x] Extension risk increases  
- [ ] The security’s duration declines faster  
- [ ] The MBS experiences immediate prepayment penalty  

> **Explanation:** Slower prepayments mean the principal is outstanding longer, leading to extension risk and a lengthened duration.

### If an investor is analyzing an MBS pool with changing monthly interest rates, which step is essential in each monthly iteration of the cash flow projection?
- [x] Recalculate the outstanding balance for the next month  
- [ ] Convert all coupon rates to an annual basis and ignore the monthly details  
- [ ] Assume the original principal is unchanged for simplicity  
- [ ] Incorporate credit card receivables  

> **Explanation:** Each month’s outstanding principal changes once you add scheduled principal and prepayment, so you must update it before moving to the next month’s calculation.

### Which factor most directly influences the pace of MBS prepayments?
- [x] The level of mortgage rates relative to borrowers’ existing rates  
- [ ] The bond’s Macaulay Duration  
- [ ] The next Federal Open Market Committee meeting date  
- [ ] Weighted Average Life of a bullet corporate bond  

> **Explanation:** Changes in mortgage rates relative to borrowers’ current mortgage rates is the primary driver of refinancing and thus prepayment behavior.

### A fast-prepayment scenario generally will:
- [ ] Lower the investor’s effective yield if reinvestment rates are the same  
- [x] Possibly lead to reinvestment at lower yields if rates are declining  
- [ ] Increase the Weighted Average Life  
- [ ] Create negative convexity for the entire bond market  

> **Explanation:** When an MBS prepays quickly in a declining rate environment, investors get principal back sooner and must reinvest at lower rates (a reinvestment risk), often lowering the overall yield.

### What role does the servicer primarily play in a pass-through MBS structure?
- [ ] Determines the daily interest rate for mortgage holders  
- [x] Collects payments from homeowners, deducts servicing fees, and passes remaining cash flows on to investors  
- [ ] Sets the MBS’s monthly net interest  
- [ ] Guarantees the principal repayment  

> **Explanation:** In pass-through MBS, the servicer collects homeowner payments, retains a small servicing fee, and distributes the net principal and interest to investors.

### True or False: In a stable interest rate environment, an MBS always prepays at exactly 100 PSA.
- [ ] True  
- [x] False  

> **Explanation:** Prepayments can vary widely, and 100 PSA is just a benchmark guess. Actual prepayments can be higher or lower, depending on a range of borrower-specific and macroeconomic factors.

{{< /quizdown >}}
