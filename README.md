# Test-Driven Development

## Virtual Vending Machine
In this exercise, you need to write code that simulates a [vending machine](https://en.wikipedia.org/wiki/Vending_machine). 

### Set Up
1. Fork this repository
2. Clone your fork to your local machine
3. Install project dependencies with `npm install`

### Instructions
1. Follow a test-driven development process. 
2. Review the below requirements
3. Start with creating a domain model, then write a test, and pass it by writing source code. 
4. Repeat until you've finished.

### Requirements
Take a moment to think about and note down the inputs and outputs of a vending machine. There are multiple ways you could model these in your code.  Also consider how you use a vending machine, the multiple steps you take to buy an item: enter an item code, add the money, receive the item. How could you model these steps in your code? There is no "correct" answer to these questions. Try to consider the different approaches and various benefits and drawbacks. If you were using this code, how would you expect it to work?

> Note: for storing change, you don't need to consider individual coins. You can simply maintain a total of the current change available.

```
As a vending machine user
So I know what items are available to buy
I'd like to see a list of stocked items
```

```
As a vending machine user
So I know what items I can afford
I'd like to know the price for each item
```

```
As a vending machine user
So I know what how to order an item
I'd like each item to have a unique code
```

```
As a vending machine user
So that I know what to do next
I'd like the vending machine to provide a status message
```

```
As a vending machine user
So that I can buy an item 
I'd like to be able to order an item by providing it's code
```

```
As a vending machine user
So that I know how much to pay
I'd like the vending machine status message to prompt me for payment after ordering an item
```

```
As a vending machine user
So that I can pay
I'd like the vending machine to accept coins after an item is ordered
```

```
As a vending machine user
So that I don't accidentally loose money
I'd like the vending machine to only accept coins when an order has been placed
```

```
As a vending machine user
So that I don't order an invalid item
I'd like the vending machine status message to prompt me when I provide an invalid item code
```

```
As a vending machine user
So that I know how much left is to pay
I'd like the vending status message to prompt me for the remaining payment after each coin is provided
```

```
As a vending machine user
So that I can receive my item
I'd like the vending machine to provide the item to me once I have paid the full amount
```

```
As a vending machine user
So that I do not spend more money that I need to
I'd like the vending machine to provide me with change when I pay over the items cost
```

```
As a vending machine user
So that I can change my mind
I'd like to be able to cancel an  order and have any submitted payment returned
```

```
As a vending machine owner
So that users can be provided with change
I'd like to be able to supply the vending machine with money to use as change
```

```
As a vending machine owner
So that users can be provided with change
I'd like the vending machine to stop accepting orders when there is no change available
```

```
As a vending machine user
So that I don't order an item that is unavailable
I'd like the status message to tell me an item is out of stock if I attempt to order it and there are none remaining
```

```
As a vending machine user
So I know what items I can afford
I'd like to know the price for each item
```

#### Further work

- Think about the different responsibilities of your code. Could any of these be moved to a separate class?
