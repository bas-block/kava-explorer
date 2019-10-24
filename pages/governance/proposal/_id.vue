<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" xl="8" class="mx-auto mt-4">
        <h1 class="display-1 font-weight-light grey--text text--darken-3 pb-3">
          <nuxt-link to="/governance" class="pr-4" style="text-decoration:none">
            <v-icon>mdi-arrow-left</v-icon>
          </nuxt-link>Proposal Detail
        </h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="12" xl="8" class="mx-auto">
        <v-row no-gutters>
          <v-col cols="12" class="px-2">
            <v-card>
              <v-row class="px-4">
                <v-col>
                  <span
                    class="title font-weight-regular text--darken-2"
                  >#{{ proposal.id }} - {{ proposal.content.value.title }}</span>
                  <br />
                  <div class="body-2 grey--text text--darken-1">
                    Submitted
                    <span>{{ getTime(proposal.submit_time) }}</span>
                  </div>
                </v-col>
                <v-col cols="4" align="end" align-self="center">
                  <v-chip
                    v-if="proposal.proposal_status === 'VotingPeriod'"
                    color="blue"
                    dark
                  >Voting</v-chip>
                  <v-chip v-if="proposal.proposal_status === 'Rejected'" color="red" dark>Rejected</v-chip>
                  <v-chip v-if="proposal.proposal_status === 'Passed'" color="green" dark>Passed</v-chip>
                </v-col>
              </v-row>

              <v-row class="px-4">
                <v-col>{{ proposal.content.value.description }}</v-col>
              </v-row>

              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12" md="3">
                    <span class="grey--text text--darken-3">{{ proposal.content.type}}</span>
                    <br />Type
                  </v-col>
                  <v-col cols="12" md="3" class="mt-1">
                    <span class="grey--text text--darken-3">{{ getTime(proposal.deposit_end_time) }}</span>
                    <br />Deposit End Time
                  </v-col>
                  <v-col cols="12" md="3" class="mt-1">
                    <span
                      class="grey--text text--darken-3"
                    >{{ getTime(proposal.voting_start_time) }}</span>
                    <br />Voting Start
                  </v-col>
                  <v-col cols="12" md="3" class="mt-1">
                    <span class="grey--text text--darken-3">{{ getTime(proposal.voting_end_time) }}</span>
                    <br />Voting End
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="px-2 mt-4">
            <v-card>
              <v-row class="px-4">
                <v-col>
                  <span class="title font-weight-regular text--darken-2">Vote</span>
                </v-col>
              </v-row>

              <v-row class="px-4" no-gutters>
                <v-col>
                  <v-row>
                    <v-col cols="12" md="4" align="center" class="pl-3 align-self-center">
                      <apexchart
                        width="255"
                        type="pie"
                        :series="[parseFloat(10), parseFloat(20), parseFloat(30), parseFloat(50)]"
                        :options="chartOptions"
                      ></apexchart>
                    </v-col>
                    <v-col cols="12" class="hidden-sm-and-up" align="center">
                      <div class="display-1 font-weight-light grey--text text--darken-4">
                        <UIAmount :microAmount="1000000" :denom="$store.getters[`app/stakeDenom`]" />
                      </div>
                      <div class="subtitle-1 grey--text text--darken-1 pt-1">Total</div>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-row>
                        <v-col cols="12">
                          <div class="subtitle-1 grey--text text--darken-4">
                            <UIAmount :microAmount="10" :denom="$store.getters[`app/stakeDenom`]" />
                          </div>
                          <div class="body-2 grey--text text--darken-1">Yes</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12">
                          <div class="subtitle-1 grey--text text--darken-4">
                            <UIAmount :microAmount="22" :denom="$store.getters[`app/stakeDenom`]" />
                          </div>
                          <div class="body-2 grey--text text--darken-1">No</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12">
                          <div class="subtitle-1 grey--text text--darken-4">
                            <UIAmount :microAmount="223" :denom="$store.getters[`app/stakeDenom`]" />
                          </div>
                          <div class="body-2 grey--text text--darken-1">NoWithVeto</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12">
                          <div class="subtitle-1 grey--text text--darken-4">
                            <UIAmount
                              :microAmount="2342"
                              :denom="$store.getters[`app/stakeDenom`]"
                            />
                          </div>
                          <div class="body-2 grey--text text--darken-1">Abstain</div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="4" class="hidden-sm-and-down align-self-center">
                      <div class="display-1 font-weight-light grey--text text--darken-4">
                        <UIAmount :microAmount="100" :denom="$store.getters[`app/stakeDenom`]" />
                      </div>
                      <div class="subtitle-1 grey--text text--darken-1 pt-1">Total</div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" class="px-2 mt-4">
            <v-card>
              <v-row class="px-4">
                <v-col>
                  <span class="title font-weight-regular text--darken-2">Votes</span>
                </v-col>
                <v-tabs grow>
                  <v-tab>All</v-tab>
                  <v-tab>Yes</v-tab>
                  <v-tab>No</v-tab>
                  <v-tab>NoWithVeto</v-tab>
                  <v-tab>Abstain</v-tab>
                </v-tabs>
              </v-row>
              <v-row class="px-4">
                <v-col>df</v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" class="px-2 mt-4">
            <v-card>
              <v-row class="px-4">
                <v-col>
                  <span class="title font-weight-regular text--darken-2">Depositors</span>
                </v-col>
              </v-row>
              <v-row class="px-4">
                <v-col>df</v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row></v-row>
  </v-container>
</template>

<script>
import parseISO from "date-fns/esm/parseISO";
import formatDistanceStrict from "date-fns/esm/formatDistanceStrict";

import UIAmount from "@/components/UI/Amount";

export default {
  components: {
    UIAmount
  },
  methods: {
    getTime(timestamp, allowFuture = true) {
      if (typeof timestamp === "string") {
        timestamp = parseISO(timestamp);
      }
      const now = new Date();
      let isFuture = false;
      // if timestamp from future
      if (timestamp > now) {
        isFuture = true;
      }

      if (timestamp > now && !allowFuture) {
        timestamp = now;
      }

      const distance = formatDistanceStrict(timestamp, now, {
        roundingMethod: "floor"
      });

      return distance && distance !== "Invalid Date"
        ? isFuture
          ? "in " + distance
          : distance + " ago"
        : false;
    }
  },
  data() {
    return {
      chartOptions: {
        labels: ["Yes", "No", "NoWithVeto", "Abstain"],
        legend: {
          show: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ]
      },
      proposal: {
        content: {
          type: "cosmos-sdk/ParameterChangeProposal",
          value: {
            title: "Enable Send Bank Param Change",
            description: "Enable Send",
            changes: [
              {
                subspace: "bank",
                key: "sendenabled",
                value: "true"
              }
            ]
          }
        },
        id: "1",
        proposal_status: "VotingPeriod",
        final_tally_result: {
          yes: "0",
          abstain: "0",
          no: "0",
          no_with_veto: "0"
        },
        submit_time: "2019-10-21T13:28:12.695225943Z",
        deposit_end_time: "2019-10-28T13:28:12.695225943Z",
        total_deposit: [
          {
            denom: "ubtsg",
            amount: "512100000"
          }
        ],
        voting_start_time: "2019-10-24T16:06:32.057020157Z",
        voting_end_time: "2019-10-27T16:06:32.057020157Z"
      }
    };
  }
};
</script>