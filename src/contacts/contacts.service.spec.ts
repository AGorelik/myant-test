import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';

describe('ContactsService', () => {
  let service: ContactsService;

  const mockTokens = [
    {
      provide: getModelToken('Contact'),
      useValue: {},
    }
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        ...mockTokens
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('delete', () => {
    describe('when an invalid mongo ID is the input, a BadRequestException should be thrown', () => {
      it('should delete 0 or 1 contacts', async () => {
        const id = '1';
        
        try { 
          await service.delete(id);
        } 
        
        catch(error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual('ID should be a valid mongodb ID');
        }
      });
    })
  });
});

function getRepositoryToken(Model: Model<any, {}, {}, {}>): string | symbol | Function | import("@nestjs/common").Type<any> | import("@nestjs/common").Abstract<any> {
  throw new Error('Function not implemented.');
}
