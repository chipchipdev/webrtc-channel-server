import { gql } from 'apollo-server-express';

export const channelSchema = gql`

  type Channel {
    id: String!
  }
  
  type ChannelWithParticipant {
    id: String!
    participant: Participant!
  }
  
  input ChannelInput {
    id: String!
  }

  type Participant {
    id: String!
  }

  input ParticipantInput {
    id: String!
  }

  type Query {
    default: String
  }

  type Mutation {
    # Link to specific channel by channel id
    link(
      channel: ChannelInput!
      participant: ParticipantInput!
    ): Channel!
    # Create RTC Connection
    offer(
      channel: ChannelInput!
      from: ParticipantInput!
      to: ParticipantInput!
      offer: TransferRTCSessionDescriptionInput!
    ): Boolean!
    answer(
      channel: ChannelInput!
      from: ParticipantInput!
      to: ParticipantInput!
      answer: TransferRTCSessionDescriptionInput!
    ): Boolean!
    candidate(
      channel: ChannelInput!
      from: ParticipantInput!
      to: ParticipantInput!
      candidate: TransferRTCIceCandidateInput!
    ): Boolean!
  }

  type Subscription {
    linked(channel: ChannelInput!): ChannelWithParticipant!
    offered(channel: ChannelInput!): Offer!
    answered(channel: ChannelInput!): Answer!
    candidated(channel: ChannelInput!): Candidate!
  }

`;
