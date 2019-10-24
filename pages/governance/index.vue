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
          <v-col cols="6" class="px-2">
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title class="subtitle-1">Proposal #1</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-chip color="red" dark>Rejected</v-chip>
              </v-toolbar>
              <v-card-text>
                <div class="title" style="color:#444">Enable Send Bank Param Change</div>
                <div class="body-2">
                  Proposer
                  <a href="#">bitsong132dsa823</a>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" class="px-2">
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title class="subtitle-1">Proposal #2</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-chip color="green" dark>Passed</v-chip>
              </v-toolbar>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row></v-row>
  </v-container>
</template