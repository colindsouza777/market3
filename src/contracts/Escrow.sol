// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0 ;

contract Escrow {

  address agent;
  mapping(address => uint256) public deposits;
  mapping(address => uint256) public balance;
  uint256 payment;

  modifier onlyAgent() {
      require(msg.sender == agent);
       _;
    }

  constructor () {
      agent = msg.sender;

    }

    function deposit(address payee) public onlyAgent payable {
        uint256 amount = msg.value;
        deposits[payee] = deposits[payee] + amount;
        balance [payee] = deposits[payee];

    }

    function withdraw(address payable payee ,uint256 percent ) public onlyAgent {
        payment = 0;
        payment= deposits[payee]*percent/100;
        payee.transfer(payment);
        balance [payee] = deposits[payee] - payment;
        
    }

}