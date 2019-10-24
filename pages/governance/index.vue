<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" xl="8" class="mx-auto mt-4">
        <h1 class="display-1 font-weight-light grey--text text--darken-3 pb-3">Governance</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col cols="12" xl="8" class="mx-auto">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
            class="px-2"
            v-for="(proposal, index) in proposals"
            v-bind:key="proposal.id"
          >
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

              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="6">
                    <span
                      class="grey--text text--darken-3"
                    >{{ getTime(proposal.voting_start_time) }}</span>
                    <br />Voting Start
                  </v-col>
                  <v-col cols="6">
                    <span class="grey--text text--darken-3">{{ getTime(proposal.voting_end_time) }}</span>
                    <br />Voting End
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text nuxt to="/governance/proposal/1" color="primary">More Details</v-btn>
              </v-card-actions>
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

export default {
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
      proposals: [
        {
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
      ]
    };
  }
};
</script>