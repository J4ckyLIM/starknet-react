"use client";
import React, { useState } from "react";

import { Abi, BlockTag } from "starknet";
import { useContractRead, useNetwork } from "@starknet-react/core";

import { StarknetProvider } from "@/components/starknet/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function ContractRead() {
  const [blockIdentifier, setBlockIdentifier] = useState("latest");
  const { chain } = useNetwork();

  const { data, refetch, fetchStatus, status } = useContractRead({
    abi: [
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            type: "felt",
          },
        ],
        state_mutability: "view",
        type: "function",
      },
      {
        name: "balanceOf",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
        type: "function",
      },
    ] as const satisfies Abi,
    functionName: "balanceOf",
    address: chain.nativeCurrency.address,
    args: chain.nativeCurrency.address,
    watch: true,
    blockIdentifier:
      blockIdentifier === "latest" ? BlockTag.latest : BlockTag.pending,
  });

  return (
    <Card className="max-w-[400px] mx-auto">
      <CardHeader>
        <CardTitle>Contract read</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label>Block identifier</Label>
          <Select value={blockIdentifier} onValueChange={setBlockIdentifier}>
            <SelectTrigger className="w[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label>Fetch status</Label>
          <p>{fetchStatus}</p>
        </div>
        <div className="space-y-1">
          <Label>Status</Label>
          <p>{status}</p>
        </div>
        <div className="space-y-1">
          <Label>Call result</Label>
          <p>{JSON.stringify(data)}</p>
        </div>
        <div className="space-y-1">
          <Button onClick={() => refetch()}>Refetch data</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContractReadDemo() {
  return (
    <StarknetProvider>
      <ContractRead />
    </StarknetProvider>
  );
}
