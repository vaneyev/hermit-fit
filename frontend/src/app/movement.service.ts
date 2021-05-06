import {Injectable} from '@angular/core';

interface Movement {
  readonly key: string;
  readonly order: number;
  readonly title: string;
  readonly type: string;
}

interface MovementType {
  readonly key: string;
  readonly order: number;
  readonly title: string;
}

export type MovementTypes = ReadonlyArray<MovementType>;

interface Exercise {
  readonly date: Date;
  readonly movementId: string;
  readonly isWork: boolean;
  readonly sets: number;
  readonly reps: number;
  readonly comments: string;
}

const movementTypes: MovementTypes = [
  {
    key: 'e60957d5-059a-4865-b013-5c4224a42ba2',
    order: 1,
    title: 'Pushups',
  },
  {
    key: '9369a125-d5a6-4aed-985d-37afce7795ee',
    order: 2,
    title: 'Squats',
  },
  {
    key: '7d326b76-8a91-4699-ba78-36b6c67869ff',
    order: 3,
    title: 'Pullups',
  },
  {
    key: '63671ceb-40cf-4413-941d-14b4b5d288f6',
    order: 4,
    title: 'Leg raises',
  },
  {
    key: '5308de79-4fc8-4702-897a-4a09a223a8bd',
    order: 5,
    title: 'Bridges',
  },
  {
    key: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc',
    order: 6,
    title: 'Handstand pushups',
  },
];

const movements: Movement[] = [
  {
    key: 'ef9fa185-8117-42aa-82fc-fa647ab48193',
    order: 1,
    title: 'Wall pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: 'c81a49f0-154a-48c9-859d-2c3a5724cae9',
    order: 2,
    title: 'Incline pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '726b4263-abaf-4b33-86e4-47937f729a1b',
    order: 3,
    title: 'Kneeling pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '4bd1bcf3-f3ba-439b-b728-8a8a3ccabd18',
    order: 4,
    title: 'Half pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '965d2062-635b-4f37-b30c-7b9d47ecec89',
    order: 5,
    title: 'Full pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: 'de6ae271-ae49-43fc-b35f-690b509f6126',
    order: 6,
    title: 'Close pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: 'a37234df-92ac-4e64-8ffe-fd35e4758a2e',
    order: 7,
    title: 'Uneven pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: 'db1880cc-97d8-4966-9187-9b85099258d3',
    order: 8,
    title: 'Half one-arm pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '0292be1c-913f-451f-b649-5b1a9091cfd0',
    order: 9,
    title: 'Lever pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '4e7dab2b-c8d9-4a6b-a4bd-ea5b23d5caf2',
    order: 10,
    title: 'One-arm pushups',
    type: 'e60957d5-059a-4865-b013-5c4224a42ba2'
  },
  {
    key: '0d23412b-59a7-4ef3-b521-7796f141f12f',
    order: 1,
    title: 'Shoulderstand squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: 'a2019e48-9bc5-4b05-a435-f233d69fde04',
    order: 2,
    title: 'Jackknife squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: 'aa59d8e8-417e-43ab-9d26-cfae43256aa7',
    order: 3,
    title: 'Supported squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: '9662ea0e-07cb-4518-bc62-26d1818407eb',
    order: 4,
    title: 'Half squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: 'f40a7f14-b804-417d-a2fb-80eb0acf796d',
    order: 5,
    title: 'Full squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: 'c79a807b-1ad2-43d0-8fec-d3a2a6f54c28',
    order: 6,
    title: 'Close squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: '30dcf7d4-971e-4761-aa19-be074c403d4d',
    order: 7,
    title: 'Uneven squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: '0ab441dc-f830-4537-a1d5-7fb94abd54ee',
    order: 8,
    title: 'Half one-leg squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: '3ec27cce-4c2f-4246-b569-963c76ae565a',
    order: 9,
    title: 'Assisted one-leg squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: 'd44ee707-bbc9-4104-965a-aa543d2c2f47',
    order: 10,
    title: 'One-leg squats',
    type: '9369a125-d5a6-4aed-985d-37afce7795ee'
  },
  {
    key: '8c3f0d5c-67ca-4dc2-bbbc-ccd2b086070d',
    order: 1,
    title: 'Vertical pulls',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '6027c8de-5344-427d-8266-730827efd172',
    order: 2,
    title: 'Horizontal pulls',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '82f4ce75-4dd5-4b1c-8ae1-9f9d79baff87',
    order: 3,
    title: 'Jackknife pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '087e0586-a57c-4ebf-a9a7-141dfbf2166e',
    order: 4,
    title: 'Half pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '9a9b7e98-06b2-4c1d-bac8-52bec92f9b14',
    order: 5,
    title: 'Full pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '2d9eaa87-0227-489b-a14d-6287440d9c8d',
    order: 6,
    title: 'Close pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '7ae33b73-572e-4a30-ae32-d06a1acd58c7',
    order: 7,
    title: 'Uneven pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: 'ed958a37-a90a-4362-9cc6-40ac52aa6156',
    order: 8,
    title: 'Half one-arm pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '4187e5ce-3957-42a6-8b43-7311c10e0ebf',
    order: 9,
    title: 'Assisted one-arm pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '56d23cbd-d339-4859-891c-2e5564f642a4',
    order: 10,
    title: 'One-arm pullups',
    type: '7d326b76-8a91-4699-ba78-36b6c67869ff'
  },
  {
    key: '31febeeb-2e9c-437d-95dc-870b9a92bd7f',
    order: 1,
    title: 'Knee tucks',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '869e90d3-3bb7-423e-a2a7-9d06dc5f32ef',
    order: 2,
    title: 'Flat knee raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '8956ceb3-74c0-4202-8334-bd1044eec377',
    order: 3,
    title: 'Flat bent leg raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: 'b878493e-2904-4ac7-84ed-4929f5763c18',
    order: 4,
    title: 'Flat frog raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '87903bf2-fe2a-4441-bf88-df7f13322056',
    order: 5,
    title: 'Flat straight leg raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: 'c95b8eae-a903-4e25-b305-77d3d254ac50',
    order: 6,
    title: 'Hanging knee raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: 'b8a5b281-c29d-4ad6-981d-0a12d074dd5b',
    order: 7,
    title: 'Hanging bent leg raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '9fd79858-2141-4414-9892-9b9982a83b66',
    order: 8,
    title: 'Hanging frog raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '85e0e4f1-4e7c-4a28-8875-f1d57392aebe',
    order: 9,
    title: 'Partial straight leg raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '9d4ebbcd-0311-485f-b722-549e2e1a4a4c',
    order: 10,
    title: 'Hanging straight leg raises',
    type: '63671ceb-40cf-4413-941d-14b4b5d288f6'
  },
  {
    key: '80f94790-f325-4950-a934-6f7818532e9f',
    order: 1,
    title: 'Short bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '74f95e88-ab77-444b-b8ec-39985ebe602b',
    order: 2,
    title: 'Straight bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '7e49cb84-a794-48e5-a789-28b28dd7978d',
    order: 3,
    title: 'Angled bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: 'f1b88f74-7d95-4951-baf6-05244d947cac',
    order: 4,
    title: 'Head bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: 'da2e13fd-3e71-44a1-8675-2e3f6344208d',
    order: 5,
    title: 'Half bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '63451f9e-05dc-49e4-81f4-4bf472fa6ba4',
    order: 6,
    title: 'Full bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '436a7628-6451-4e34-910b-346f9cef0bf1',
    order: 7,
    title: 'Wall walking bridges (Down)',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: 'fc583b64-111a-45f8-abe6-d6be0c7234e4',
    order: 8,
    title: 'Wall walking bridges (Up)',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '0f856776-459a-4539-8de4-17706d61ed5d',
    order: 9,
    title: 'Closing bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: 'b0c27a14-e18d-41c5-8260-8845288c36e9',
    order: 10,
    title: 'Stand-to-stand bridges',
    type: '5308de79-4fc8-4702-897a-4a09a223a8bd'
  },
  {
    key: '5a51d5db-1c3f-46bc-8b96-d9a3e3a09693',
    order: 1,
    title: 'Wall headstands',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: '958d3579-7844-45cb-8640-7e758f74333e',
    order: 2,
    title: 'Crow stands',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: '92db319b-7d8c-4fed-b120-ef318673a993',
    order: 3,
    title: 'Wall handstands',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: '9b32af00-1580-4e95-ae65-b83a157aa0fe',
    order: 4,
    title: 'Half headstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: '501b9cc3-cf39-45bf-853f-e11076fea7e8',
    order: 5,
    title: 'Handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: '44bdd8e3-b6b6-4e83-979d-b7bbc70af1c8',
    order: 6,
    title: 'Close handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: 'cc5f0e33-9b9d-41c4-ade5-5c97e4f67ef1',
    order: 7,
    title: 'Uneven handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: 'b9c5d84b-06da-4590-a111-85ea39a665af',
    order: 8,
    title: 'Half one-arm handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: 'd547da1c-dd65-4fbf-8b42-a1a3db2967d6',
    order: 9,
    title: 'Lever handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc'
  },
  {
    key: 'b6a9e455-a286-4ba1-8355-1c4bbfadc716',
    order: 10,
    title: 'One-arm handstand pushups',
    type: 'e97f3b38-4ca8-4f6f-8274-a44af9b34dfc',
  },
];


@Injectable({
  providedIn: 'root'
})
export class MovementService {

  getMovementsTypes(): readonly MovementType[] {
    return movementTypes;
  }

  getMovements(type: string): Movement[] {
    return movements.filter(value => value.type === type);
  }

  getExercises(): readonly Exercise[] {
    return null;
  }
}
