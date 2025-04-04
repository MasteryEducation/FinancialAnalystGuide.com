---
title: "Convergence and Delivery"
description: "Explore how futures prices align with underlying spot prices at expiry, the mechanics of physical and cash settlement, and the importance of delivery protocols in maintaining arbitrage-free markets."
linkTitle: "8.5 Convergence and Delivery"
date: 2025-03-21
type: docs
nav_weight: 8500
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Why Convergence Matters

If there’s one thing that keeps most futures traders on their toes, it’s the idea that futures prices ultimately converge to spot prices when the contract expires. It sounds obvious—of course at some point the futures contract “knows” it’s time to catch up (or down) to reality—but there’s actually a fascinating interplay of arbitrage, cost of carry, and practical delivery logistics that forces this final matching. Without convergence, the entire futures pricing framework would break down, and, well, we’d probably have derivatives students tossing their textbooks out the window in disbelief.

Back in my early days, I remember hearing a cautionary tale of a trader who was absolutely certain that a commodity futures contract was mispriced compared to the spot market. They saw a persistent spread and just kept rolling over positions. As expiry neared, though, that gap narrowed quickly—convergence at its finest. Even if it felt “slow” for a while, the magnetic pull between futures and spot became unbreakable close to the finish line. In simpler terms, it was a perfect display of the principle: no matter how far futures and spot prices might drift, they are locked in a relationship that ultimately leads them to the same destination, especially at or near delivery.

## The Theoretical Backbone: No-Arbitrage and Cost of Carry

Convergence is basically an outcome of the no-arbitrage principle. If futures prices fail to reflect the costs and benefits of holding the underlying (like storage costs, financing, and any convenience yields), savvy market participants would jump in to buy or sell the contract plus the underlying in a way that forces the two prices back in line.

• Cost of Carry. We introduced the cost of carry model earlier in this volume (see Sections 8.3 and 8.4). It states that the fair futures price is generally:
  
  F₀ = S₀ × e^(r + u − y)T  

  Where:  
  – F₀ is the fair forward or futures price.  
  – S₀ is the current spot price.  
  – r is the risk-free rate (or financing cost).  
  – u is storage costs (if any).  
  – y is convenience yield (if any).  
  – T is time to maturity (in years).  

  Slight variations of the formula appear, but the concept remains: if the futures price is too high relative to spot plus storage and financing costs, arbitrageurs can sell the overpriced futures, buy the spot (using borrowed funds), and store it. Conversely, if futures are too low, they can buy the undervalued futures and short-sell the spot. By doing so, they lock in riskless profits until maturity. This quickly drives futures prices back to levels consistent with no-arbitrage. In the final days, physically settled futures can’t deviate much from spot once you net out cost-of-carry because you can literally buy or sell the underlying and make or take delivery.

• Basis and Convergence. The difference between futures and spot prices is called the basis. As we inch closer to expiration, the basis shrinks. If the basis does not converge to zero (or near zero) by delivery, an arbitrage would exist. Traders could exploit that—and in doing so, they ensure convergence actually happens.  

## Delivery in Physically Settled Contracts

Let’s pivot a bit away from theory and look at a real-life scenario: physically delivered futures. It might sound intimidating to actually have to deliver a few million barrels of crude oil or thousands of bushels of corn. But that’s exactly what can happen if you hold a short futures contract to expiration. You are obligated to deliver the underlying commodity in line with the contract’s grade requirements and within the specified delivery window.

### Delivery Period and Logistics

Physically settled futures typically give a “delivery period” around expiry. This is a window during which the short position holder (the seller) must deliver the commodity. Each market sets its own schedule, but it’s generally a tight window—maybe a week or a few days—when the transaction must happen. If you’re the short on the last trading day, you get assigned to deliver the commodity, and you better have it, or have a very strong plan to acquire it quickly.

From a personal perspective, the first time I looked into the small print of a soybean futures contract, I was amazed at how detailed the rules were. They laid out the approved grade of beans (moisture content, foreign material thresholds, etc.), the approved warehouses, the acceptable shipping certificates, you name it. Honestly, reading through these specs made me realize just how specialized these markets are. You might see “soybeans” on a commodity ticker, but the delivery terms are anything but generic.

Here’s a small mermaid diagram to visualize the timeline from the trade to final delivery:

```mermaid
flowchart LR
    A["Enter Futures Contract"] --> B["Approach Expiration <br/> Notice Period"]
    B --> C["Expire Contract <br/> (Physical Settlement)"]
    C --> D["Actual Commodity Delivery"]
```

In the above flow, the “Notice Period” is a short timeframe before expiration when the short holder can file a notice of intent to deliver. If you’re still holding that short, you’ll need to follow through with the actual delivery process.

### Grade and Quality Specifications

Each physically delivered futures contract has strict grade and quality requirements. For metals such as gold, exchanges specify purity standards (e.g., 99.5% or higher). Crude oil might define sulfur content, API gravity, and so forth. Agricultural products set maximum levels of moisture, foreign matter, and other characteristics. These standardized definitions are essential: you can’t show up with “almost soybeans,” or “silver that’s close to 99.0% pure.” If you fail to meet the benchmark, you’ve essentially defaulted and face costly penalties.

### Delivery Locations and Optionality

Many futures contracts also specify individual delivery points or warehouses. In some cases, the short position can choose the delivery location, which has potential for strategic advantages. If you own an oil storage facility in Cushing, Oklahoma (the delivery point for WTI crude futures), that might create some additional optionality: you can choose the exact timing and location (within contract allowances) that’s most favorable to you. This can affect local spot prices, shipping logistics, and basis movements leading up to expiration.

## Cash Settlement: No Trucks Required

Physical delivery might make sense for metals, grains, and some energy contracts. However, in many modern contracts—from equity index futures (like the E-mini S&P 500) to certain interest rate futures—delivery in the literal sense just isn’t practical. In these cases, a cash settlement mechanism is used. Rather than transferring barrels of oil or bushels of corn, the contract parties settle by paying or receiving a cash amount that reflects the difference between the final settlement price and the original contract price.

If you’re long a cash-settled futures contract and the final settlement price is higher than the price at which you originally entered the contract, you get a cash payout for your gain. If it’s lower, you pay the difference. The key is that the process at expiration uses a reference spot price or index price to finalize who owes what. The no-arbitrage argument still ensures that near expiry, the futures price converges to this underlying index.

### Example: Equity Index Futures

A classic example is the E-mini S&P 500 futures. On the final settlement day (often a Friday), the final price is determined by referencing the opening prices of the S&P 500 constituent stocks or some relevant benchmark. If you’re a long E-mini holder, and the settlement is above your entry price, you’re up—and you simply receive that positive difference in cash. If you’re short, you’d owe that difference. There’s no truck that pulls up to deliver 500 notional shares of each S&P company to your front door (which might be entertaining to imagine, but obviously impractical).

### Example: Interest Rate Futures

Similarly, many interest rate futures—like Eurodollar and Fed funds futures—settle in cash. Most track some short-term interest rate. You’ll see final settlement determined by the average of those rates near contract maturity. Again, the last trading day ends with a final settlement price that’s pegged to the underlying interest rate, ensuring convergence.

## The Mechanism of Convergence

Though physically settled and cash-settled futures differ in how the endgame plays out, the common denominator is the reference to the spot price or a recognized fundamental value. As the last day of trading arrives:

1. **Traders with No Intention of Delivering or Taking Delivery**  
   Most participants exit or roll over their contracts before expiration if they never intended to manage a physical commodity. This exodus of purely speculative positions reduces open interest. Meanwhile, basis and price differences tend to narrow as last-minute arbitrage pushes the futures price toward spot.  

2. **Arbitrage Fun**  
   If the futures price is still too high, arbitrageurs short the futures and buy the underlying asset. If it’s too low, they do the opposite. This keeps the markets aligned in those final hours (or days).  

3. **Settlement Price**  
   On the last trading day, the exchange uses a specific method—like an average of trades during a certain time window, or the official opening/closing price of the underlying. With physically delivered contracts, the short must make the underlying available according to contract terms, while the long must pay the final futures price (or do the offsetting trade if they haven’t settled). For cash-settled, it’s straightforward: the exchange calculates a cash payment based on the difference between the final settlement price and the futures price at entry.  

## Potential Disruptions: Volatility and “Odd” Situations

Let me share another story: the infamous situation in April 2020, when the price of the expiring WTI Crude Oil futures contract plummeted into negative territory. If you were holding a long position and near expiry you couldn’t find storage or a buyer to offset your position, you were in trouble. Prices went to levels that seemed insane, but it was the screaming example of how physical delivery constraints (like extremely limited storage capacity at Cushing) can push you into paying someone to take the oil off your hands. In that chaotic moment, the concept of convergence still held—just that the spot market itself went negative, reflecting the real pain of that physical oversupply.  

In normal conditions, these episodes are rare, but that year proved that “once in a blue moon” can happen. This highlights how delivery logistics and extreme market stresses can affect final settlement in physically delivered contracts.  

## Common Pitfalls and Best Practices

• **Ignoring the Delivery Notice Window.** If you’re an investor who never wants physical delivery, remember to exit or roll your contracts before first notice day or last trading day. Otherwise, you might get stuck delivering or receiving the commodity.  

• **Misunderstanding the Settlement Index.** For cash-settled futures, the final price is often derived from a specific formula or average of trades over a time window. This can lead to “marking events” that might differ from just a single day’s close. Always check the contract specs so you’re not blindsided.  

• **Assuming Perfect Liquidity.** During the last moments of a contract, liquidity can dry up dramatically, making it more expensive to exit large positions. Market orders might experience unexpected slippage. So if you want out, do it well before the final bell rings.  

• **Forgetting About Storage Costs and Location Constraints.** In physically settled contracts, local storage constraints, shipping costs, and location differentials can cause surprising price movements. That’s how we ended up with negative crude oil prices when storage was at capacity.  

## Case Study: Gold Futures Delivery vs. Cash Settlement

Gold offers an interesting perspective on the difference between physically settled and cash-settled processes. COMEX Gold Futures (GC) are physically delivered. If you hold a short position through final settlement, you must make delivery of 100 troy ounces of a specified fineness (usually 0.995) to an approved exchange depository. Meanwhile, many gold-based OTC forward contracts are settled in cash since actual gold bars may be more difficult to physically transfer or due to the preference of the counterparties.  

Arbitrage ensures that whether you’re delivering physical gold or just transferring the notional difference in cash, the final settlement price will be extremely close to the spot market’s gold price—plus or minus any cost of carry or convenience yield if that’s relevant. Either way, convergence is the fundamental reality.

## Practical Exam Tips for CFA Candidates

1. **Identify the Settlement Type.** For exam questions about futures contracts, check whether they are physically or cash-settled. This influences how final payoffs are computed and what kind of logistical constraints might come into play.  

2. **Spot-Futures Convergence Logic.** Make sure you can explain why futures converge to spot (the no-arbitrage principle). In short-answer or essay-style questions, referencing cost-of-carry or example arbitrage strategies can be a good approach.  

3. **Remember Delivery Details.** CFA Level I typically requires you to know basic contract characteristics, but don’t gloss over them. The exam might test your understanding of how different grades or lot sizes can affect the feasibility/choice of delivery.  

4. **Be Alert to Potential “Exceptions.”** The exam might hint at unusual market conditions like negative prices or unexpectedly wide spreads near maturity. Link these to real-world constraints (like the lack of storage for energy commodities).  

5. **Calculations with Settlement Price.** If you see a question about final payoffs, always clarify if it’s physical or cash settlement. For cash settlement, you typically do a simple difference between futures entry price and final settlement price times the contract size. For physical, expect something about the spot price.  

6. **Managing Time in Multi-Part Questions.** In the CFA exam’s constructed-response or item-set format, you might see a scenario that begins with an introduction on forward or futures prices, followed by a “twist” describing delivery constraints. Carefully track each step—especially the final segments that hinge on how the contract is settled.

## References and Further Reading

- CME Group Specifications. (https://www.cmegroup.com/)  
- ICE Futures Delivery Procedures. (Available on ICE’s official website)  
- Hull, J. (2022). Options, Futures, & Other Derivatives, 11th Edition.  
- CFA Institute (2025). CFA® Program Curriculum, Level I, Volume 7: Derivatives.  
- CFTC Regulations (https://www.cftc.gov/).

If you’re eager to keep drilling down, checking the CME and ICE contract specs is super helpful. They provide itemized details of each step in the delivery process—like the exact hours in a delivery window or how charges for storage are calculated.

-----

## Test Your Knowledge: Convergence and Delivery in Futures

{{< quizdown >}}

### When discussing convergence, what is the central principle ensuring that futures prices move in line with spot prices?

- [ ] Regulatory mandates around margin requirements.
- [x] The no-arbitrage principle.
- [ ] The authority of clearinghouses only.
- [ ] Speculative trading limit enforcement.

> **Explanation:** The no-arbitrage principle says that if a persistent price discrepancy exists, traders can execute risk-free trades to profit, thus pushing the futures price toward the spot level.

### Which of the following best describes a key difference between physically settled and cash-settled futures at expiration?

- [x] Physically settled futures require actual delivery of the underlying asset.
- [ ] Cash-settled futures are always more expensive than physically settled futures.
- [ ] Physically settled futures use a price index to calculate payoff.
- [ ] Cash-settled futures cannot be used by speculators.

> **Explanation:** In physically settled contracts, the short position must deliver the physical asset, while cash-settled contracts only require a cash payment reflecting the final settlement price versus the contract price.

### Why do some market participants choose to exit or roll their futures positions well before expiration?

- [ ] They believe interest rates will drop sharply.
- [ ] They want to increase transaction fees for brokers.
- [x] They wish to avoid physical delivery or complications associated with last-minute liquidity.
- [ ] They are required by law to exit all contracts one month before expiry.

> **Explanation:** Many traders and hedgers only want exposure to price movements, not the logistical burden of actual delivery or the risk of diminished liquidity at expiration.

### Suppose the spot price of Commodity X is significantly lower than its futures price just two days before contract expiration. Which statement most accurately explains why prices are likely to converge quickly?

- [ ] Market participants will stop trading the commodity.
- [ ] Regulators will force the prices to match.
- [x] Arbitrageurs will short the futures and buy the spot, earning a near risk-free profit until the price difference narrows.
- [ ] Exchanges forbid large price deviations near contract maturity.

> **Explanation:** Arbitrage plays a critical role. When futures are overvalued relative to spot near expiration, arbitrageors sell futures and buy the underlying asset to lock in a near risk-free profit, which pushes prices together.

### In physically delivered contracts, what is the term for the window of time around expiry during which the short can deliver the underlying?

- [x] Delivery period.
- [ ] Settlement window.
- [ ] Physical notice day.
- [ ] Arbitrage window.

> **Explanation:** The “delivery period” is a designated time around expiry when the short position holder must deliver the underlying, in accordance with the contract’s rules.

### Which statement regarding grade or quality specifications is correct?

- [ ] They apply only to cash-settled futures.
- [x] They define acceptable standards of the underlying commodity in physically settled contracts.
- [ ] They are optional guidelines recommended by futures commissions.
- [ ] They are irrelevant for agricultural commodities.

> **Explanation:** Physically delivered futures specify grade or quality requirements (e.g., moisture content, purity) to ensure delivery consistency.

### When final settlement occurs in a cash-settled contract, the payoff is computed primarily by:

- [x] The difference between the final settlement price and the original contract price, multiplied by the contract size.
- [ ] The difference in the underlying commodity’s physical characteristics.
- [ ] A random exchange-determined factor.
- [ ] The opening price plus the highest intraday price.

> **Explanation:** In cash settlement, the net gain or loss is generally the difference between the contract entry price and the final reference price (or index) times the contract multiplier.

### Consider a scenario where the spot market for a commodity suddenly experiences severe logistical bottlenecks, such as a lack of storage, near contract expiry. What is the likely impact on the futures price?

- [ ] The futures price will become fixed at the cost of storage.
- [x] The futures price can plummet or even go negative if holders are desperate to avoid physical delivery.
- [ ] The futures price will always rise to match the cost of delivery.
- [ ] The futures price will remain unaffected.

> **Explanation:** If storage is unavailable or extremely expensive, futures holders who don’t want the commodity may pay others to take it off their hands, possibly pushing the futures price to extreme lows or negative values.

### Why might an exchange opt for cash settlement rather than physical delivery for certain futures contracts?

- [ ] To make the contracts legally unenforceable.
- [x] Because the underlying asset is impractical to deliver or is already a broad index (e.g., equity index or reference interest rate).
- [ ] To increase arbitrage complexity.
- [ ] To eliminate all transaction costs.

> **Explanation:** Some assets—especially intangible ones, like an equity index or a short-term interest rate—can’t be physically delivered, making cash settlement the only practical approach.

### True or False: Liquidity typically remains unchanged right up through the final trading day of a futures contract.

- [ ] True
- [x] False

> **Explanation:** Liquidity often declines as many traders close or roll over positions before expiration, resulting in fewer active participants near the final days of trading.

{{< /quizdown >}}
