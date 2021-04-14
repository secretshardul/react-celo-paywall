# Celo one-time paywall
Celo paywall is a new way for media websites to monetize their content. Paywalls today ask for monthly subscription fees. But actually people consume content from multiple sites. It is impractical for the casual reader to purchase subscriptions for multiple sites. They end up installing paywall removal tools, which results in lost revenue for websites.

Instead we can let users pay for and read individual articles. The challenge is that fiat payment processors are oriented towards larger payments due to overhead cost of transfers. Stripe has a minimum payment requirement of USD 0.50.

We can overcome this problem through crypto payments on Celo. Low gas fees allows us to operate this model with better margins and low overhead.

# Live demo
https://celo-paywall.netlify.app/

# Video
[![Celo paywall demo](https://user-images.githubusercontent.com/49580849/114779407-b6596f80-9d93-11eb-84e7-63759863d35c.png)](https://www.youtube.com/watch?v=ySXfLBxzMx4)

# Implementation
Celo paywall is simple to integrate. You just need to wrap your content with the `<Paywall>` component.

```tsx
<Paywall pageId="unique-id-for-page">
    <Article />
</Paywall>
```

# Working
1. User logs in with Celo wallet. Valora, Metamask and others are supported.

    ![login](https://user-images.githubusercontent.com/49580849/114780593-3f24db00-9d95-11eb-8d70-93ba900082ad.png)

2. The paywall code queries the smart contract to check if user has purchased access to the article.

3. If user has not purchased access, a modal is displayed asking user to make payment.

    ![purchase](https://user-images.githubusercontent.com/49580849/114780567-37fdcd00-9d95-11eb-9811-ebeb93f9f7ee.png)

4. A `payable` call is made to the smart contract. The user's address and page ID is stored in the contract, after which user gets access to the article.

    ![unlocked page](https://user-images.githubusercontent.com/49580849/114780573-392efa00-9d95-11eb-877a-4c5db512e3e9.png)

# Tech stack
- React
- Typescript
- Truffle
- Solidity smart contracts on Celo
- Celo `use-contractkit`
