import {PassportStrategy} from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-google-oauth20'
import { Injectable} from '@nestjs/common'
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID : '79553662823-842f2fofen5ficdfnqmdjl20be83ra3p.apps.googleusercontent.com',
            clientSecret: "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",
            callbackURL: "http://localhost:5000/auth/google/callback",
            scope: ['email', 'profile']
        });
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: 
        VerifyCallback ) : Promise<any>{
            const {name, emails, photos } = profile
            const user = {
                email: emails[0].value,
                firstName: name.givenName,
                lastName: name.familyName,
                picture: photos[0].value,
                accessToken
            }
            done(null,user)
        }
}