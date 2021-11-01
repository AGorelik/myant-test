import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let service: GroupsService;

  const mockMongooseTokens = [
    {
      provide: getModelToken('Group'),
      useValue: {},
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ...mockMongooseTokens,
        GroupsService],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOne', () => {
    describe('when an invalid mongo ID is the input, a BadRequestException should be thrown', () => {
      it('should delete 0 or 1 contacts', async () => {
        const id = '1';
        
        try { 
          await service.getOne(id);
        } 
        
        catch(error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual('ID should be a valid mongodb ID');
        }
      });
    })
  });
});
