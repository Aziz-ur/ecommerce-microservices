import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const result = appController.getHello();
      expect(result).toBe("Hello World!");
    });
  });

  describe("getHealth", () => {
    it("should return health status", () => {
      const result = appController.getHealth();
      expect(result).toHaveProperty("status", "ok");
      expect(result).toHaveProperty("service", "auth-service");
      expect(result).toHaveProperty("timestamp");
      expect(result).toHaveProperty("uptime");
    });
  });
});
