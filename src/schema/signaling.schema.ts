import { gql } from 'apollo-server-express';

export const signalingSchema = gql`
  type Offer {
    channel: Channel!
    from: Participant!
    to: Participant!
    offer: RTCSessionDescription
  }

  type Answer {
    channel: Channel!
    from: Participant!
    to: Participant!
    answer: RTCSessionDescription
  }

  type Candidate {
    channel: Channel!
    from: Participant!
    to: Participant!
    candidate: RTCIceCandidate
  }

  type RTCSessionDescription {
    sdp: String
    type: RTCSdp
  }

  type RTCIceCandidate {
    candidate: String
    component: RTCIceComponent
    foundation: String
    port: Int
    priority: Int
    protocol: RTCIceProtocol
    relatedAddress: String
    relatedPort: Int
    sdpMLineIndex: Int
    sdpMid: String
    tcpType: RTCIceTcpCandidate
    type: RTCIceCandidateType
    usernameFragment: String
  }

  enum RTCSdp {
    answer
    offer
    pranswer
    rollback
  }

  enum RTCIceComponent {
    rtcp
    rtp
  }

  enum RTCIceProtocol {
    tcp
    udp
  }

  enum RTCIceTcpCandidate {
    active
    passive
    so
  }

  enum RTCIceCandidateType{
    host
    prflx
    relay
    srflx
  }

  input TransferRTCSessionDescriptionInput {
    sdp: String
    type:RTCSdp
  }

  input TransferRTCIceCandidateInput {
    candidate: String
    component: RTCIceComponent
    foundation: String
    port: Int
    priority: Int
    protocol: RTCIceProtocol
    relatedAddress: String
    relatedPort: Int
    sdpMLineIndex: Int
    sdpMid: String
    tcpType: RTCIceTcpCandidate
    type: RTCIceCandidateType
    usernameFragment: String
  }
`;
